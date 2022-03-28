<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(
            {
                network: 'network/networkInfo'
            }
        )
    },
    mounted: function() {
        if (!this.network.display) {
            this.$message(
                {
                    message:'Please select a network!',
                    type:'error',
                    showClose: true
                }
            )
            this.$router.push('/')
        }
        if (this.network.logo) {
            // a simple way to handle dynamic image url
            const oldImg = document.getElementById("network-logo").src
            document.getElementById("network-logo").src = oldImg.replace('logo.svg', this.network.logo)
        }
    }
}
</script>
<template>
  <div class="header">
    <span class="selected-network">
      {{ network ? network.display: "" }}
    </span>
    <img
      id="network-logo"
      src="@/assets/logo.svg"
    >
  </div>
  <h2> Welcome to Substrate Multisig </h2>
</template>
<style lang="stylus">
@import '@/assets/base.css'

h2
  text-align: center
  margin: 120px auto
  font-size: 56px
.header 
  height: 50px
  display: flex
  justify-content: flex-end
  align-items: center
  .selected-network
    color: var(--theme-orange)
    padding: 10px 16px
    font-size: 18px
    font-weight: 500
    background: #FFC59F
    opacity: 0.7
    box-shadow: 0px 0px 1.48148px #8393A3
    border-radius: 20px
  img
    width: 50px
    height: 50px
    margin-right: 140px
</style>