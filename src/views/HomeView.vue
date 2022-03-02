<script>
import CreateWallet from '@/components/CreateWallet.vue'
import LoginWallet from '@/components/LoginWallet.vue'

export default {
  data() {
    return {
      networks: {
        "127.0.0.1:9944": "LocalChain",
        "rpc.tophacker.com": "DoraFactory",
        "rpc.polkadot.io": "Polkadot",
        "kusama-rpc.polkadot.io": "Kusama"
      },
      selected: ''
    }
  },
  components: {CreateWallet, LoginWallet },
  watch: {
    selected: function(v) {
      let network = v
      if (v.startsWith('127.0') || v.startsWith('localhost')) {
        network = 'ws://' + v
      } else {
        network = 'wss://' + v
      }
      this.$store.dispatch(
        'network/switchNetwork', network)
    }
  }
}
</script>

<template>
<div class="content">
  <div class="header">
    <select v-model="selected">
      <option value="">Select A Chain</option>
      <option v-for="(v, k, i) in networks" :key="i" :value="k">{{ v }}</option>
    </select>
    <img src="@/assets/logo.svg" />
  </div>
  <h2> Welcome to Substrate Multisig </h2>
  <main>
    <CreateWallet />
    <div class="vertical-space-divider"></div>
    <LoginWallet />
  </main>
</div>
</template>
<style lang="stylus">
@import '@/assets/base.css'

.content
  max-width: 1440px
  margin: 0 auto
h2
  text-align: center
  margin: 120px auto
  font-size: 56px
.header 
  height: 50px
  display: flex
  justify-content: flex-end
  align-items: center
  select
    padding: 5px 10px
    border-color: var(--theme-orange)
    height: 30px
    border-radius: 10px
  img
    width: 50px
    height: 50px
    margin-right: 140px
main
  display: flex
  justify-content: center
  min-width: 970px
.vertical-space-divider 
  width: 24px
</style>