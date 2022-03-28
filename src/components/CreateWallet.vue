<script>
import { RouterLink } from 'vue-router'
import RightArrow from './icons/IconRightArrow.vue'

export default {
    components:{RightArrow}
}
</script>
<template>
  <div class="create-wallet-main blur-card-bg">
    <h3>Create a wallet</h3>
    <div class="description">
      Substrate multisig is a frontend product of the multisig pallet developed by Parity.io
    </div>
    <div class="btn">
      <RouterLink to="/create-wallet">
        + Create new wallet    
        <RightArrow />
      </RouterLink>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
@import '@/assets/base.css'

.create-wallet-main {
    width: 473px;
    padding: 50px 40px;
}

</style>
