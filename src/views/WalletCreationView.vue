<script setup>
import { RouterView } from 'vue-router'
import NetworkInfo from '../components/NetworkInfo.vue'

</script>

<template>
<div class="content">
  <NetworkInfo />
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
.steps
  min-width: 970px
  background: linear-gradient(168.04deg, rgba(255, 255, 255, 0.56) 6.64%, rgba(248, 248, 255, 0.71) 38.22%, rgba(255, 255, 255, 0.59) 65.37%, #F8EBF4 92.29%)
  box-shadow: -10px 48.5967px 140px rgba(126, 123, 160, 0.2)
  backdrop-filter: blur(19px)
  border-radius: 40px 40px 0px 0px
</style>