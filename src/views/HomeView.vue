<script setup>
import CreateWallet from '@/components/CreateWallet.vue'
import LoginWallet from '@/components/LoginWallet.vue'
</script>

<template>
  <main>
    <CreateWallet />
    <div class="vertical-space-divider"></div>
    <LoginWallet />
  </main>
</template>
<style lang="stylus">
main {
  display: flex;
  justify-content: center;
  min-width: 970px;
}
.vertical-space-divider {
  width: 24px;
}
</style>