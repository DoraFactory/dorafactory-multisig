<script>
import { RouterLink } from 'vue-router'
import Modal from '@/components/Modal.vue'
import ReceiveAssets from '@/components/ReceiveAssets.vue'

export default {
    components: {Modal, ReceiveAssets},
    data() {
      return {
        show: false
      }
    },
    methods: {
        close() {
            this.show=false
        }
    }
}

</script>
<template>
<div class="all-assets">
    <p class="title">ASSETS / COINS</p>
    <div class="asset-card-list">
        <div class="asset-card">
            <div class="asset-network">
                <img src="@/assets/networks/polkadot.png" />
                <span> Polkadot </span>
            </div>
            <div class="asset-detail">
                <p class="detail-label">BALANCE</p>
                <p class="detail-value">10443.11 DOT</p>
                <p class="detail-label">VALUE</p>
                <p class="detail-value">$1,343</p>
                <span class="receive-btn">
                    ↙ Receive
                </span>
            </div>
        </div>
        <div class="asset-card">
            <div class="asset-network">
                <img src="@/assets/networks/kusama.png" />
                <span> KUSAMA </span>
            </div>
            <div class="asset-detail">
                <p class="detail-label">BALANCE</p>
                <p class="detail-value">10443.11 KSM</p>
                <p class="detail-label">VALUE</p>
                <p class="detail-value">$1,343</p>
                <span class="receive-btn">
                    ↙ Receive
                </span>
            </div>
 
        </div>
        <div class="asset-card">
            <div class="asset-network">
                <img src="@/assets/networks/dorafactory.png" />
                <span> Dora Factory </span>
            </div>
            <div class="asset-detail">
                <p class="detail-label">BALANCE</p>
                <p class="detail-value">10443.11 DORA</p>
                <p class="detail-label">VALUE</p>
                <p class="detail-value">$1,343</p>
                <span class="receive-btn" @click="show=true">
                    ↙ Receive
                </span>
            </div>
 
        </div>
    </div>
    <Modal :showModal="show" @close="show=false">
        <template v-slot:content>
        <ReceiveAssets />
        </template>
    </Modal>

</div>
</template>
<style lang="stylus" scoped>
@import '@/assets/base.css'
.all-assets
  background: linear-gradient(190.57deg, rgba(213, 213, 213, 0.56) 19.25%, rgba(248, 248, 255, 0.71) 54.39%, rgba(230, 230, 230, 0.59) 90.02%)
  box-shadow: -10px 48.5967px 140px rgba(126, 123, 160, 0.2)
  border-radius: 34px
  padding: 40px 30px
  margin-right: 10px
  width: 1000px
.title
  font-weight: 700
  font-size: 20px
.asset-card-list
  display: flex
  justify-content: space-between 
.asset-card
  border: 2px solid #FFFFFF
  box-sizing: border-box
  border-radius: 34px
  width: 300px
  height: 330px
  padding: 24px 20px
  .asset-network
    color: black
    display: flex
    border-bottom: 2px solid #FFFFFF
    padding-bottom: 16px
    img
      width: 48px
      height: 48px
      margin-right: 8px
    span
      height: 48px
      line-height: 48px
      color: #0E0E11
      font-size: 20px
      font-weight: 500
  .detail-label
    color: rgba(14, 14, 17, 0.5)
    font-size: 16px
    margin-block: 0
    margin-top: 20px
  .detail-value
    font-size: 20px
    color: #FD761F
    margin-block: 0
  .receive-btn
    padding: 10px 16px
    color: #FD771E
    cursor pointer
    background: #FCFCFD
    border: 3px solid #FFFFFF
    box-sizing: border-box
    border-radius: 20px
    margin-top: 20px
    font-size: 16px
    display: inline-block
</style>
