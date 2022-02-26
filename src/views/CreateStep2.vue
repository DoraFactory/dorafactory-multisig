<script>
import { RouterLink } from 'vue-router'
import StepProgress from '@/components/StepProgress.vue'

export default {
    components:{StepProgress},
    methods: {
        next() {
            this.$router.push('/create-wallet/step3')
        }
    }
}
</script>
<template>
<div class="create-wallet-steps">
    <StepProgress :current=2 />

  <p>
    1. Name of the new Wallet，The new multisig wallet will only be available on <span class="selected-network">Dora Factory Testnet[0]</span>
  </p>
  <div class="form-input">
      <input name="wallet-name" type="text" />
  </div>
  <p>
      2. Your multisig wallet will have one or more owners. Your connected wallet address has been pre-filled as the first owner.
      <div class="adress-form">
          <div class="filled">
            <div class="adress-titles">
                <div class="">NAME</div>
                <div class="">ADDRESS</div>
            </div>
          </div>
      </div>
  </p>
  <div>
      3. Any transaction requires the confirmation of:
      <input type="number" name="threshold" />
  </div>
  <div class="btn-group">
      <div class="btn" @click="next">Continue</div>
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