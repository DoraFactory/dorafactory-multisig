import { createStore, createLogger } from 'vuex'
import network from './modules/network'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    network
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})