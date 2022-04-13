<script>
import { RouterLink } from 'vue-router'
import StepProgress from '@/components/StepProgress.vue'
import { mapState } from 'vuex'

export default {
    components:{StepProgress},
    data: function() {
        const accounts = []
        const selectedAcct = this.$store.state.network.account
        if (selectedAcct) {
            accounts.push(
                {
                    'name': selectedAcct.meta.name,
                    'address': selectedAcct.address,
                    'status': ''
                }
            )
        }
        return {
            accounts: accounts,
            walletName: '',
            threshold: 1
        }
    },
    computed: mapState({
      network: state => state.network.selected,
    }),
    methods: {
        addAccount() {
            this.accounts.push(
                {
                    'name': '',
                    'address':'',
                    'status': ''
                }
            )
        },
        removeAccount(i) {
          this.accounts.splice(i, 1)
        },
        validateAddress(i, address) {
          if(!address) {
            return
          }
          const duplicated = this.accounts.filter((e)=>e.address == address)
          if (duplicated.length > 1) {
            this.$message.error('Do not fill in the same address')
            this.accounts[i].status = 'invalid'
          } else {
            this.accounts[i].status = 'valid'
          }
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
            if (this.threshold > this.accounts.length) {
              this.$message.error('Threshold can not exceed number of accounts')
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
    <StepProgress :current="2" />
    <section>
      1. Name of the new Wallet，The new multisig wallet will only be available on 
      <span class="current-network">{{ network.name }}</span>
    </section>
    <div class="form-input">
      <input
        v-model="walletName"
        class="wallet-name"
        type="text"
        placeholder="my-wallet-name"
      >
    </div>
    <section>
      2. Your multisig wallet will have one or more owners. Your connected wallet address has been pre-filled as the first owner.
      <div class="adress-form">
        <div class="filled">
          <div class="adress-titles">
            <div>NAME</div>
            <div>ADDRESS</div>
          </div>
          <div
            v-for="(account, index) in accounts"
            :key="index"
            class="address-inputs"
          >
            <input
              v-model="account.name"
              type="text"
              :disabled="index==0"
            >
            <div class="editable">
              <div
                class="validate-status"
                :class="account.status"
              />
              <input
                v-model="account.address"
                type="text"
                :disabled="index==0"
                @blur="validateAddress(index, account.address)"
              >
            </div>
            <img
              class="deletion"
              src="@/assets/delete.svg"
              :class="{visible: index > 0}"
              @click="removeAccount(index)"
            >
          </div>
          <div
            class="add-link"
            @click="addAccount"
          >
            + Add another owner
          </div>
        </div>
      </div>
    </section>
    <section>
      3. Any transaction requires the confirmation of:
      <div class="threshold">
        <input
          v-model="threshold"
          type="number"
        >
        <span>out of owner(s)</span>
      </div>
    </section>
    <div class="btn-group">
      <div
        class="btn"
        @click="next"
      >
        Continue
      </div>
      <a @click="$router.go(-1)">cancel</a>
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
      cursor: pointer
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
.address-inputs
  margin-top: 12px
  display inline-flex
  width: calc(100% + 30px)
  input:first-child
    margin-right: 16px
  .deletion
    margin-left: 10px
    cursor: pointer
    visibility: hidden
    &.visible
      visibility: visible
  .editable
    position relative
    width: 100%
    .validate-status
      width: 20px
      height: 20px
      visibility: hidden
      position absolute
      background-repeat: no-repeat
      background-position: center
      background-size: cover
      margin-top: 10px
      right: 10px
      &.valid
        visibility: visible
        background-image: url('@/assets/valid.svg')
      &.invalid
        visibility: visible
        background-image: url('@/assets/invalid.svg')
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