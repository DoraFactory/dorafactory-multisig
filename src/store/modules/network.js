import { ApiPromise, WsProvider } from '@polkadot/api'

const state = () => ({
    networkName: '',
    connectStatus: null
})

// getters
const getters = {

}

// actions
const actions = {
  async switchNetwork ({ commit, state }, networkAddress) {
    commit('setConnectStatus', null)
    // empty cart
    window.api = null
    try {
        const wsProvider = new WsProvider(networkAddress)
        const api = new ApiPromise({ provider: wsProvider })
        await api.isReady
        const chain = await api.rpc.system.chain()
        window.api = api

        commit('setConnectStatus', 'successful')
        commit('setNetworkName', chain.toHuman())
    } catch (e) {
      console.error(e)
      commit('setConnectStatus', 'failed')
      window.api = null
    }
  },
}

// mutations
const mutations = {
  pushProductToCart (state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },

  incrementItemQuantity (state, { id }) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },

  setNetworkName (state, name ) {
    state.networkName = name
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
