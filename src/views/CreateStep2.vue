<script>
import { RouterLink } from 'vue-router'
import StepProgress from '@/components/StepProgress.vue'

export default {
    data: function() {
        const accounts = []
        const selectedAcct = this.$store.state.network.account
        if (selectedAcct) {
            accounts.push(
                {
                    'name': selectedAcct.meta.name,
                    'address': selectedAcct.address
                }
            )
        }
        return {
            accounts: accounts,
            walletName: '',
            threshold: 1
        }
    },
    components:{StepProgress},
    methods: {
        addAccount() {
            this.accounts.push(
                {
                    'name': '',
                    'address':'',
                }
            )
        },
        next() {
            if (!this.walletName) {
                this.$message(
                {
                    message:'Please input a valid wallet name!',
                    type:'error',
                    showClose: true
                })
                return
            }
            this.$router.push({
                name: "step3", 
                params: {
                    'walletName': this.walletName,
                    'threshold': this.threshold,
                    'accounts': JSON.stringify(this.accounts)
                }
            })
        }
    }
}
</script>
<template>
<div class="create-wallet-steps">
    <StepProgress :current=2 />
  <section>
    1. Name of the new Wallet，The new multisig wallet will only be available on 
    <span class="current-network">Dora Factory Testnet[0]</span>
  </section>
  <div class="form-input">
      <input class="wallet-name" v-model="walletName" type="text" placeholder="my-wallet-name"/>
  </div>
  <section>
      2. Your multisig wallet will have one or more owners. Your connected wallet address has been pre-filled as the first owner.
      <div class="adress-form">
          <div class="filled">
            <div class="adress-titles">
                <div>NAME</div>
                <div>ADDRESS</div>
            </div>
            <div class="address-info" v-for="(account, index) in accounts" :key="index">
                <input type="text" v-model="account.name" :disabled="index==0" />
                <input type="text" v-model="account.address" :disabled="index==0" />
            </div>
            <div class="add-link" @click="addAccount">
                + Add another owner
            </div>
          </div>
      </div>
  </section>
  <section>
      3. Any transaction requires the confirmation of:
      <div class="threshold">
        <input type="number" v-model="threshold" />
        <span>out of owner(s)</span>
      </div>
</section>
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
.current-network
    color: #0E0E11
    font-weight: 400
    background: rgba(14, 14, 17, 0.1)
    border-radius: 4px
    display: inline-block
    padding: 3px 8px
    font-size: 12px
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
input
  border: 1px solid rgba(14, 14, 17, 0.1)
  border-radius: 4px
  padding: 8px 16px
  color: rgba(14, 14, 17, 0.35)
  font-size: 16px
  box-sizing: border-box
.wallet-name
  width: 100%
.filled
  color: rgba(14, 14, 17, 0.5)
  font-size: 16px
  border-radius: 4px
  .adress-titles
    background: rgba(16, 16, 16, 0.04)
    padding: 8px 20px
    width: 100%
    display inline-flex
    box-sizing: border-box
    div:first-child
      margin-right: 150px
.address-info
  margin-top: 12px
  display inline-flex
  width: 100%
  input:first-child
    margin-right: 16px
  input:last-child
    width: 100%
.add-link
  margin-top: 12px
  color: var(--theme-orange)
  text-decoration: underline
  cursor: pointer
.threshold
  margin-top: 16px
  font-weight: 500
  input
    margin-right: 10px
section
  font-weight: 500
  margin-block-start: 48px
.form-input
  margin-top: 16px
.adress-form
  margin-top: 14px
</style>