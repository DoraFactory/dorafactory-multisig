<script setup>
import { RouterView } from 'vue-router'
import SideMenu from '@/components/SideMenu.vue'
</script>

<template>
  <div class="header">
    <span>Substrate multisig</span>
    <div class="current-account">
      <img src="@/assets/logo.svg" />
    </div>
  </div>
  <div class="content">
      <SideMenu />
      <RouterView />
  </div>
</template>
<style lang="stylus" scoped>
.header
  margin-top: 6px
  padding: 42px 36px
  display: flex
  justify-content: space-between
  span
    font-size: 32px
    font-weight: 800
  span::first-letter
      color: #FF8C45
.content
  margin-left: 0px
  display: flex
  justify-content: flex-start
</style>