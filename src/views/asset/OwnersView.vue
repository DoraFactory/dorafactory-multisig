<script>
import { RouterLink } from 'vue-router'

export default {
    data: function() {
      const storedWallets = localStorage.getItem('multisig-wallets')
      if (!storedWallets) {
        return {
          wallets: []
        }
      }
      return {
        wallets: JSON.parse(storedWallets)
      }
    }
}
</script>
<template>
  <div class="all-owners">
    <p class="title">
      OWNERES /
    </p>
    <div class="owner-card-list">
      <div
        v-for="(account,index) in wallets[0].accounts"
        :key="index"
        class="owner-card"
      >
        <img src="@/assets/avatar.svg">
        <p> {{ account.name }}</p>
        <p class="address">
          {{ account.address }}
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
@import '@/assets/base.css'
.all-owners
  background: linear-gradient(190.57deg, rgba(213, 213, 213, 0.56) 19.25%, rgba(248, 248, 255, 0.71) 54.39%, rgba(230, 230, 230, 0.59) 90.02%)
  box-shadow: -10px 48.5967px 140px rgba(126, 123, 160, 0.2)
  border-radius: 34px
  padding: 40px 30px
  margin-right: 10px
  width: 1000px
.title
  font-weight: 700
  font-size: 20px
  margin-block-end: 40px
.owner-card-list
  display: flex
  justify-content: space-between 
.owner-card
  border: 2px solid #FFFFFF
  box-sizing: border-box
  border-radius: 34px
  width: 300px
  height: 200px
  padding: 40px 0px
  text-align: center
  p
    margin-block-start: 10px
    margin-block-end: 0 px
    color: #0E0E11
    font-size: 16px
    padding: 0 10px
    overflow: hidden
    text-overflow: ellipsis
    .address
      font-size: 14px
</style>
