<script>
import { RouterLink } from 'vue-router'
import StepProgress from '@/components/StepProgress.vue'
import IconPolkadot from '@/components/icons/IconPolkadot.vue'
import { mapState } from 'vuex'


export default {
    components:{StepProgress, IconPolkadot},
    computed: mapState({
      network: state => state.network.networkName,
    }),
    methods: {
        cancel() {
            this.$message(
                {
                    message:'Canceled',
                    type:'error',
                    showClose: true
                }
            );
        },
        next() {
            this.$router.push('/create-wallet/step2')
        }
    }
}
</script>
<template>
<div class="create-wallet-steps">
    <StepProgress :current=1 />
    <p class="intro-text">1、Select network on which to create your multisig wallet.The app is currently pointing to</p>
    <div class="selected-network">
      {{ network }}
   </div>
  <p class="guide-text">
      2、Please use Polkadot JS Extension.
  </p>
  <div class="extension-btn">
      <IconPolkadot />
      Polkadot
  </div>
  <div class="btn-group">
      <div class="btn" @click="next">Connect Wallet</div>
      <a @click="cancel">cancel</a>
  </div>
</div>
</template>
<style lang="stylus" scoped>
@import '@/assets/base.css'

.intro-text
    margin-top: 60px
.guide-text
    margin-top: 48px
.selected-network
    color: #0E0E11
    font-weight: 400
    background: rgba(14, 14, 17, 0.1)
    border-radius: 4px
    display: inline-block
    padding: 10px 12px
.extension-btn
    color: var(--theme-orange)
    border: 1px solid var(--theme-orange)
    background: white
    display: inline-flex
    padding: 17px 32px
    font-size: 16px
    font-weight: 700
    align-items: center
    cursor: pointer
    svg
      margin-right: 10px
.btn-group
    border-top: 1px solid rgba(14, 14, 17, 0.1)
    margin-top: 48px
    padding-left: 48px
    a
      margin-left: 48px
      color: var(--theme-orange)
      font-weight: 400
</style>