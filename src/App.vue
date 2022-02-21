<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div class="content">
  <div class="header">
    <img src="@/assets/logo.svg" />
  </div>
  <h2> Welcome to Substrate Multisig </h2>
  <RouterView />
</div>
</template>

<style lang="stylus">
@import '@/assets/base.css'
.content {
  max-width: 1440px;
  margin: 0 auto;
}

h2 {
    text-align: center;
    margin: 120px auto;
    font-size: 56px;
}
.header 
  height: 50px
  display: flex
  justify-content: flex-end
  img
    width: 50px
    height: 50px
    margin-right: 140px
</style>
