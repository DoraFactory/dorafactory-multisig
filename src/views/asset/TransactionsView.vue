<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
<div class="all-assets">
    <p class="header">TRANSACTIONS</p>
    <div class="asset-card">
        <div class="asset-network">
            Polkadot
        </div>
        <div class="asset-detail">
            BALANCE
            VALUE
        </div>
    </div>
</div>
</template>
<style lang="stylus" scoped>
@import '@/assets/base.css'
.all-assets
  background: yellow
  min-width: 280px
  padding: 32px 0px
  margin-right: 10px
  height: 400px

</style>
