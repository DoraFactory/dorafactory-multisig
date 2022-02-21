<script setup>
import { RouterLink } from 'vue-router'
import StepProgress from '@/components/StepProgress.vue'

</script>
<template>
<div class="create-wallet-steps">
    <StepProgress :current=3 />

  <p>
      Review wallet information
  </p>
  <div>
      network
  </div>
</div>
</template>
<style lang="stylus" scoped>
@import '@/assets/base.css'

</style>