import { ApiPromise, WsProvider } from '@polkadot/api'

const state = () => ({
    selected: {
        name: ''
    },
    account: null,
    connectStatus: null
})

// getters
const getters = {
    networkInfo(state, getters) {
        if (state.connectStatus != 'successful' || !state.selected) {
            return {}
        }
        const addr = state.account ? state.account.address: ''
        const display =  `${state.selected.name}:${addr.substr(0, 5)}...${addr.substring(addr.length-5)}`
        return {
            display,
            logo: state.selected.logo
        }
    }
}

// actions
const actions = {
  async switchNetwork ({ commit, state }, network) {
    commit('setConnectStatus', null)
    // empty cart
    window.api = null
    try {
        const wsProvider = new WsProvider(network.address)
        const api = new ApiPromise({ provider: wsProvider })
        await api.isReady
        // const chain = await api.rpc.system.chain()
        window.api = api

        commit('setConnectStatus', 'successful')
        commit('setSelected', network)
    } catch (e) {
      console.error(e)
      commit('setConnectStatus', 'failed')
      window.api = null
    }
  },
}

// mutations
const mutations = {
  setAccount(state, account) {
      state.account = account
  },
  setSelected (state, network ) {
    state.selected = network
  },

  setConnectStatus (state, status) {
    state.connectStatus = status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
