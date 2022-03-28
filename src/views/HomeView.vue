<script>
import CreateWallet from '@/components/CreateWallet.vue'
import LoginWallet from '@/components/LoginWallet.vue'

export default {
  components: {CreateWallet, LoginWallet },
  data() {
    return {
      networks: [
        {"address": "ws://127.0.0.1:9944", "name":"LocalChain", "logo": "logo.svg"},
        {"address":"wss://rpc.polkadot.io", "name":"Polkadot", "logo": "networks/polkadot.png"},
        {"address":"wss://kusama-rpc.polkadot.io", "name":"Kusama", "logo": "networks/kusama.png"}
      ],
      selected: ''
    }
  },
  watch: {
    selected: function(v) {
      this.$store.dispatch('network/switchNetwork', v)
    }
  }
}
</script>

<template>
  <div class="content">
    <div class="header">
      <select v-model="selected">
        <option value="">
          Select A Chain
        </option>
        <option
          v-for="(network, i) in networks"
          :key="i"
          :value="network"
        >
          {{ network.name }}
        </option>
      </select>
      <img src="@/assets/logo.svg">
    </div>
    <h2> Welcome to Substrate Multisig </h2>
    <main>
      <CreateWallet />
      <div class="vertical-space-divider" />
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