<script >
import { RouterLink } from 'vue-router'
export default {
    computed: {
        menu() {
          const path = this.$router.currentRoute.value.path
          if(!path.includes('/asset')) {
            return ''
          }
          const subpath = path.replace('/asset', '')
          return subpath ? subpath.substr(1) : 'all'
        }
    },
    data: function() {
      const storedWallets = localStorage.getItem('multisig-wallets')
      if (!storedWallets) {
        return {
          wallets: []
        }
      }
      return {
        wallets: JSON.parse(storedWallets)
      }
    }
}
</script>
<template>
<div class="side-menu">
    <div class="wallet-info">
      <div class="profile">
        <img src="@/assets/avatar.svg" />
        <div class="name-info">
          <p>{{ wallets[0].name }}</p>
          <p>{{ wallets[0].address }}</p>
        </div>
      </div>
      <div class="new-wallet">
        + Create a new wallet
      </div>
    </div>
    <RouterLink to="/asset" class="menu-link" v-bind:class="{'menu-selected': menu=='all'}">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.71 5.52814L4.96 9.70814C3.22 10.4581 2 12.1881 2 14.1981V11.2681C2 8.42814 4.02 6.05814 6.71 5.52814Z" stroke="#0E0E11" class="effected" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21.5186 11.2677V14.1977C21.5186 11.9977 20.0586 10.1277 18.0586 9.52766C18.5786 8.22766 18.7286 7.20766 18.4786 6.35766C18.4586 6.26766 18.4286 6.17766 18.3886 6.09766C20.2486 7.05766 21.5186 9.02766 21.5186 11.2677Z" class="effected" stroke="#0E0E11" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.66 2.51814L12.63 2.58814L9.72996 9.31814H6.87996C6.19996 9.31814 5.54996 9.45814 4.95996 9.70814L6.70996 5.52814L6.74996 5.42814L6.81996 5.26814C6.83996 5.20814 6.85996 5.14814 6.88996 5.09814C8.19996 2.06814 9.67996 1.37814 12.66 2.51814Z" stroke="#FF761C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.0505 9.51807C17.6005 9.37807 17.1205 9.31807 16.6405 9.31807H9.73047L12.6305 2.58807L12.6605 2.51807C12.8105 2.56807 12.9505 2.63807 13.1005 2.69807L15.3105 3.62807C16.5405 4.13807 17.4005 4.66807 17.9205 5.30807C18.0205 5.42807 18.1005 5.53807 18.1705 5.66807C18.2605 5.80807 18.3305 5.94807 18.3705 6.09807C18.4105 6.18807 18.4405 6.27807 18.4605 6.35807C18.7305 7.19807 18.5705 8.22807 18.0505 9.51807Z" stroke="#FF761C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21.5217 14.1984V16.1484C21.5217 16.3484 21.5117 16.5484 21.5017 16.7484C21.3117 20.2384 19.3617 21.9984 15.6617 21.9984H7.86172C7.62172 21.9984 7.38172 21.9784 7.15172 21.9484C3.97172 21.7384 2.27172 20.0384 2.06172 16.8584C2.03172 16.6284 2.01172 16.3884 2.01172 16.1484V14.1984C2.01172 12.1884 3.23172 10.4584 4.97172 9.70836C5.57172 9.45836 6.21172 9.31836 6.89172 9.31836H16.6517C17.1417 9.31836 17.6217 9.38836 18.0617 9.51836C20.0517 10.1284 21.5217 11.9884 21.5217 14.1984Z" class="effected" stroke="#0E0E11" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>ASSETS</span>
    </RouterLink>
    <RouterLink to="/asset/transactions" class="menu-link" v-bind:class="{'menu-selected': menu=='transactions'}">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 13.24V11.51C2.5 9.44001 4.18999 7.75 6.25999 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H12.26" class="effected" stroke="#0E0E11" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.5 12.41V7.84004C2.5 6.65004 3.23 5.59 4.34 5.17L12.28 2.17C13.52 1.7 14.85 2.62003 14.85 3.95003V7.75002" class="effected" stroke="#0E0E11" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z" class="effected" stroke="#0E0E11" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 12H14" class="effected" stroke="#0E0E11" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 16.5H8.34C8.98 16.5 9.5 17.02 9.5 17.66V18.94" stroke="#FF761C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.22 15.28L3 16.5L4.22 17.72" stroke="#FF761C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.5 21.78H4.16C3.52 21.78 3 21.26 3 20.62V19.34" stroke="#FF761C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.28125 23.0003L9.50125 21.7803L8.28125 20.5603" stroke="#FF761C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>TRANSACTIONS</span>
    </RouterLink>
    <RouterLink to="/asset/owners" class="menu-link" v-bind:class="{'menu-selected': menu=='owners'}">
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.8236 14.3514C20.7904 14.7643 21.0983 15.1259 21.5112 15.159C21.924 15.1922 22.2856 14.8843 22.3188 14.4715L20.8236 14.3514ZM22.3188 14.4715C22.4855 12.3949 21.9623 10.3237 20.828 8.55135L19.5646 9.35997C20.5249 10.8604 20.9637 12.6062 20.8236 14.3514L22.3188 14.4715ZM20.828 8.55135C19.694 6.77962 18.0083 5.3983 16.0143 4.59618L15.4545 5.98781C17.1679 6.67703 18.6038 7.85888 19.5646 9.35997L20.828 8.55135Z" fill="#0E0E11"/>
        <path d="M3.17642 14.7738C3.20956 15.1867 2.90173 15.5482 2.48884 15.5814C2.07596 15.6145 1.71437 15.3067 1.68123 14.8938L3.17642 14.7738ZM1.68123 14.8938C1.51451 12.8173 2.03766 10.7461 3.17204 8.97371L4.43542 9.78233C3.47507 11.2828 3.0363 13.0285 3.17642 14.7738L1.68123 14.8938ZM3.17204 8.97371C4.30602 7.20199 5.99168 5.82067 7.98573 5.01854L8.54552 6.41017C6.83214 7.09939 5.39618 8.28125 4.43542 9.78233L3.17204 8.97371Z" fill="#0E0E11"/>
        <path d="M18 21.7144C16.2592 23.1829 14.1658 23.9821 12.0136 23.9998C9.86141 24.0174 7.75847 23.2526 6 21.8127" stroke="black" stroke-width="1.5"/>
        <path d="M23.2504 18.2855C23.2504 20.362 21.472 22.107 19.2004 22.107C16.9287 22.107 15.1504 20.362 15.1504 18.2855C15.1504 16.2091 16.9287 14.4641 19.2004 14.4641C21.472 14.4641 23.2504 16.2091 23.2504 18.2855Z" stroke="#FF761C" stroke-width="1.5"/>
        <path d="M8.85 18.2855C8.85 20.362 7.07166 22.107 4.8 22.107C2.52834 22.107 0.75 20.362 0.75 18.2855C0.75 16.2091 2.52834 14.4641 4.8 14.4641C7.07166 14.4641 8.85 16.2091 8.85 18.2855Z" stroke="#FF761C" stroke-width="1.5"/>
        <path d="M16.0502 4.57143C16.0502 6.64788 14.2719 8.39286 12.0002 8.39286C9.72854 8.39286 7.9502 6.64788 7.9502 4.57143C7.9502 2.49497 9.72854 0.75 12.0002 0.75C14.2719 0.75 16.0502 2.49497 16.0502 4.57143Z" stroke="#FF761C" stroke-width="1.5"/>
      </svg>
      <span>OWNERES</span>
    </RouterLink>
    <div class="logout">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.8999 7.55999C9.2099 3.95999 11.0599 2.48999 15.1099 2.48999H15.2399C19.7099 2.48999 21.4999 4.27999 21.4999 8.74999V15.27C21.4999 19.74 19.7099 21.53 15.2399 21.53H15.1099C11.0899 21.53 9.2399 20.08 8.9099 16.54" stroke="#0E0E11" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.0001 12H3.62012" stroke="#FF761C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.85 8.65002L2.5 12L5.85 15.35" stroke="#FF761C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>Logout</span>
    </div>
</div>
</template>
<style lang="stylus" scoped>
@import '@/assets/base.css'
.side-menu
  background: white
  min-width: 280px
  padding: 32px 0px
  height: 800px
  margin-right: 50px
  border-radius: 0px 50px 0px 0px
.wallet-info
  display: flex
  align-items: center
  margin-bottom: 50px
  flex-direction: column
  .profile
    display: flex
    justify-content: flex-start
    .name-info
      max-width: 130px      
    img
      width: 48px
      height: 48px
      margin-right: 10px
    p
      margin-block: 0
      &:last-child
        color: rgba(14, 14, 17, 0.3)
        overflow hidden
        white-space: nowrap
        text-overflow: ellipsis
.menu-link
  display: flex
  font-weight: 500
  font-size: 20px
  padding: 12px 0px 12px 36px
  margin-bottom: 24px
  margin-right: 16px
  line-height: 24px
  svg
    margin-right: 8px
.menu-selected
  background: black
  color: white
  border-radius: 0px 24px 24px 0px
  path.effected
      stroke: white
.logout
  display: flex
  cursor pointer
  border-top: 1px solid rgba(14, 14, 17, 0.1)
  line-height: 24px
  svg
    margin-right 8px
  font-weight: 500
  font-size: 20px
  padding: 36px 0px 12px 36px
  margin-top: 300px
.new-wallet
  background: #FF761C
  border-radius: 20px
  padding: 10px 16px
  color: white
  margin-top: 20px
  cursor: pointer

</style>
