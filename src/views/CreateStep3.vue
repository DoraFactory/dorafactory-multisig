<script>
import { RouterLink } from 'vue-router'
import StepProgress from '@/components/StepProgress.vue'


export default {
    data: function() {
      const params = this.$route.params
      return {
        walletName: params.walletName,
        accounts: params.accounts ? JSON.parse(params.accounts) : [],
        threshold: params.threshold
      }
    },
    components:{StepProgress},
    methods: {
        next() {
            console.log(this.$route.params)

            //this.$router.push('/create-wallet/step3')
        }
    }
}
</script>
<template>
<div class="create-wallet-steps">
    <StepProgress :current=3 />
  <p>
      Review wallet information
  </p>
  <div class="summary">
    <div class="top">
      <div class="left-part">
        <p class="first-red">Name of new multisig</p>
        <p>{{ walletName }}</p>
      </div>
      <div class="right-part">
        <p class="first-red">Any transaction requires the confirmation of:</p>
        <p> {{ threshold}} out of {{ accounts.length }} owners</p>
      </div>
    </div>
    <div class="owners">
    <p class="first-red">{{accounts.length}} wallet owners</p>
    <div class="profile" v-for="(account, index) in accounts" :key="index">
      <img src="@/assets/avatar.svg" />
      <div class="name-info">
        <p>{{ account.name }}</p>
        <p>{{ account.address }}</p>
      </div>
    </div>
  </div>
  </div>
  <div class="btn-group">
      <div class="btn" @click="next">Continue</div>
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