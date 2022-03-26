<script>
import { RouterView } from 'vue-router'
import SideMenu from '@/components/SideMenu.vue'

import { mapGetters } from 'vuex'

export default {
    components: { SideMenu },
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
            return
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
    <span>Substrate multisig</span>
    <div class="current-account">
      <span class="selected-network">
        {{ network ? network.display: "" }}
      </span>
      <img id="network-logo" src="@/assets/logo.svg" />
    </div>
  </div>
  <div class="content">
      <SideMenu />
      <RouterView />
  </div>
</template>
<style lang="stylus" scoped>
.header
  margin-top: 6px
  padding: 42px 36px
  display: flex
  justify-content: space-between
  #network-logo
    margin-right: 50px
  span
    font-size: 32px
    font-weight: 800
  span::first-letter
      color: #FF8C45
.content
  margin-left: 0px
  display: flex
  justify-content: flex-start
.current-account
  display: flex
  .selected-network
    color: var(--theme-orange)
    padding: 10px 16px
    font-size: 18px
    font-weight: 500
    background: #FFC59F
    opacity: 0.7
    box-shadow: 0px 0px 1.48148px #8393A3
    border-radius: 20px
</style>