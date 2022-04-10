<script>
import { RouterLink } from 'vue-router'
import StepProgress from '@/components/StepProgress.vue'

import { createKeyMulti, encodeAddress, sortAddresses} from '@polkadot/util-crypto'

export default {
    components:{StepProgress},
    data: function() {
      const params = this.$route.params
      return {
        walletName: params.walletName,
        accounts: params.accounts ? JSON.parse(params.accounts) : [],
        threshold: params.threshold
      }
    },
    methods: {
        createWallet() {
            const SS58Prefix = 0
            const addresses = this.accounts.map(ele => ele.address)
            const multiAddress = createKeyMulti(addresses, this.threshold)
            // Convert byte array to SS58 encoding.
            const Ss58Address = encodeAddress(multiAddress, SS58Prefix)
            let wallets = localStorage.getItem('multisig-wallets') ?
                        JSON.parse(localStorage.getItem('multisig-wallets')) : []
            const wallet = {
              'name': this.walletName,
              'accounts': this.accounts,
              'address': Ss58Address,
              'threshold': this.threshold,
              'owner': this.$store.state.network.account.address
            }
            // overwrite existing wallets
            wallets = wallets.filter((w)=>w.address!=wallet.address)
            wallets.push(wallet)
            this.$store.commit('network/setWallet', wallet)
            localStorage.setItem('multisig-wallets', JSON.stringify(wallets))
            this.$router.push('/asset')
        }
    }
}
</script>
<template>
  <div class="create-wallet-steps">
    <StepProgress :current="3" />
    <p>
      Review wallet information
    </p>
    <div class="summary">
      <div class="top">
        <div class="left-part">
          <p class="first-red">
            Name of new multisig
          </p>
          <p>{{ walletName }}</p>
        </div>
        <div class="right-part">
          <p class="first-red">
            Any transaction requires the confirmation of:
          </p>
          <p> {{ threshold }} out of {{ accounts.length }} owners</p>
        </div>
      </div>
      <div class="owners">
        <p class="first-red">
          {{ accounts.length }} wallet owners
        </p>
        <div
          v-for="(account, index) in accounts"
          :key="index"
          class="profile"
        >
          <img src="@/assets/avatar.svg">
          <div class="name-info">
            <p>{{ account.name }}</p>
            <p>{{ account.address }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-group">
      <div
        class="btn"
        @click="createWallet"
      >
        Continue
      </div>
      <a @click="$router.go(-1)">back</a>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
@import '@/assets/base.css'

.summary
  background: white
  .top
    display: flex
    justify-content: flex-start
.left-part
  margin-right: 36px 
  padding-left: 16px
.btn-group
    border-top: 1px solid rgba(14, 14, 17, 0.1)
    margin-top: 48px
    padding-left: 48px
    a
      cursor pointer
      margin-left: 48px
      color: var(--theme-orange)
      font-weight: 400
.owners
  margin-top: 16px
  padding: 8px 16px
  &>p
    padding-bottom: 8px
    border-bottom: 1px solid rgba(14, 14, 17, 0.1)
.profile
    display: flex
    justify-content: flex-start
    padding: 8px 16px
    .name-info
      max-width: 130px      
    img
      width: 40px
      height: 40px
      margin-right: 10px
    p
      margin-block: 0
      &:last-child
        color: rgba(14, 14, 17, 0.3)
        white-space: nowrap
.first-red
  &:before
    content: '*'
    color: var(--theme-orange)
</style>