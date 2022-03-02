<script setup>
import { RouterLink } from 'vue-router'
import RightArrow from './icons/IconRightArrow.vue'
</script>
<template>
<div class="login-wallet-main blur-card-bg">
    <h3>Login to existing wallet</h3>
    <div class="description">
        Already have a multisig wallet or want to access it from a different device? 
        Easily login your wallet using your wallet address.
    </div>
    <div class="btn btn-reverse">
        <RouterLink to="/asset">
          Login to existing wallet  
          <RightArrow />
        </RouterLink>
    </div>
</div>
</template>
<style lang="stylus" scoped>
@import '@/assets/base.css'
.login-wallet-main {
    width: 473px;
    padding: 50px 40px;
}

</style>
