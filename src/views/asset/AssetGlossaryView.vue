<script>
import { RouterLink } from 'vue-router'
import SimpleModal from '@/components/SimpleModal.vue'
import ReceiveAssets from '@/components/ReceiveAssets.vue'
import { mapGetters } from 'vuex'
import { formatBalance } from '@polkadot/util'


export default {
    components: {SimpleModal, ReceiveAssets},
    data() {
      const registry = window.api ? window.api.registry : null
      return {
        show: false,
        unit: registry ? registry.chainTokens[0].toUpperCase() : '',
        decimal: registry ? registry.chainDecimals[0]: 0,
        balance: '',
        networkName: '',
        marketValue: '--'
      }
    },
    computed: {
        ...mapGetters(
            {
              wallet: 'network/selectedWallet'
            }
        )
    },
    mounted: async function() {
      if (window.api) {
        this.networkName = this.$store.state.network.selected.name
        formatBalance.setDefaults(
          {
            'decimals': this.decimal,
            'unit': this.unit
          }
        )
        const res = await window.api.query.system.account(this.wallet.address)
        this.balance = formatBalance(res.data.free)
        // TODO: add a stable interface to fetch the realtime market value
        this.marketValue = 'N/A'
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
    <p class="title">
      ASSETS / COINS
    </p>
    <div class="asset-card-list">
      <div
        v-if="unit == 'DOT'"
        class="asset-card"
      >
        <div class="asset-network">
          <img src="@/assets/networks/polkadot.png">
          <span> Polkadot </span>
        </div>
        <div class="asset-detail">
          <p class="detail-label">
            BALANCE
          </p>
          <p class="detail-value">
            {{ unit }}
          </p>
          <p class="detail-label">
            VALUE
          </p>
          <p class="detail-value">
            {{ marketValue }}
          </p>
          <span
            class="receive-btn"
            @click="show=true"
          >
            ↙ Receive
          </span>
        </div>
      </div>
      <div
        v-if="unit == 'KSM'"
        class="asset-card"
      >
        <div class="asset-network">
          <img src="@/assets/networks/kusama.png">
          <span> KUSAMA </span>
        </div>
        <div class="asset-detail">
          <p class="detail-label">
            BALANCE
          </p>
          <p class="detail-value">
            {{ balance }}
          </p>
          <p class="detail-label">
            VALUE
          </p>
          <p class="detail-value">
            {{ marketValue }}
          </p>
          <span
            class="receive-btn"
            @click="show=true"
          >
            ↙ Receive
          </span>
        </div>
      </div>
      <div
        v-if="unit == 'UNIT'"
        class="asset-card"
      >
        <div class="asset-network">
          <img src="@/assets/networks/dorafactory.png">
          <span> Dora Factory </span>
        </div>
        <div class="asset-detail">
          <p class="detail-label">
            BALANCE
          </p>
          <p class="detail-value">
            {{ balance }}
          </p>
          <p class="detail-label">
            VALUE
          </p>
          <p class="detail-value">
            {{ marketValue }}
          </p>
          <span
            class="receive-btn"
            @click="show=true"
          >
            ↙ Receive
          </span>
        </div>
      </div>
    </div>
    <SimpleModal
      :show-modal="show"
      @close="show=false"
    >
      <template #content>
        <ReceiveAssets
          :address="wallet.address"
          :network-name="networkName"
          @done="show=false"
        />
      </template>
    </SimpleModal>
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
