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
    <StepProgress :current=3 />
  <p>
      Review wallet information
  </p>
  <div class="summary">
      <div class="left-part">*Name of new multisig</div>
      <div class="right-part">*Any transaction requires the confirmation of:</div>
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
  display: flex
  justify-content: flex-start
.left-part
  margin-right: 20px 
.btn-group
    border-top: 1px solid rgba(14, 14, 17, 0.1)
    margin-top: 48px
    padding-left: 48px
    a
      margin-left: 48px
      color: var(--theme-orange)
      font-weight: 400
</style>