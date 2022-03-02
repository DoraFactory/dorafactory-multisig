<script>
import { RouterView } from 'vue-router'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    return {
      network: computed(() => store.state.network.networkName)
    }
  }
}

</script>

<template>
<div class="content">
  <div class="header">
    <span class="selected-network">
      {{ network }}
    </span>
    <img src="@/assets/logo.svg" />
  </div>
  <h2> Welcome to Substrate Multisig </h2>
  <div class="steps">
    <RouterView />
  </div>
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
  .selected-network
    color: var(--theme-orange)
    padding: 10px 16px
    font-size: 18px
    font-weight: 500
    background: #FFC59F
    opacity: 0.7
    box-shadow: 0px 0px 1.48148px #8393A3
    border-radius: 20px
  img
    width: 50px
    height: 50px
    margin-right: 140px
.steps
  min-width: 970px
  background: linear-gradient(168.04deg, rgba(255, 255, 255, 0.56) 6.64%, rgba(248, 248, 255, 0.71) 38.22%, rgba(255, 255, 255, 0.59) 65.37%, #F8EBF4 92.29%)
  box-shadow: -10px 48.5967px 140px rgba(126, 123, 160, 0.2)
  backdrop-filter: blur(19px)
  border-radius: 40px 40px 0px 0px
</style>