<script>
import { mapGetters } from 'vuex'
import AddressInfo from '@/components/AddressInfo.vue'
import { sortAddresses } from '@polkadot/util-crypto'
import { web3Enable, web3FromAddress } from '@polkadot/extension-dapp'
import { toSubstrateAddr } from '@/utils/substrate.js'


export default {
  components: {AddressInfo},
  computed: {
      ...mapGetters(
          {
            wallet: 'network/selectedWallet'
          }
      ),
      transactions: function() {
        if(this.tabIndex == 0) {
          return this.pendingTrans
        }
        if(this.tabIndex == 1) {
          return this.createdTrans
        }
        return this.completedTrans
      }
    },
    data: function() {
      return {
        pendingTrans: {},
        createdTrans: {},
        completedTrans: {},
        calls: {},
        tabIndex: 0,
        tabs:["Pending", "Created", "Completed"]
      }
    },
    methods: {
      callDetail(hash) {
        const call = this.calls[hash]
        if (!Array.isArray(call)) {
          return null
        }
        return call[0]
      },
      openTrans() {
        window.location.href='https://polkadot.js.org/apps'
      },
      async approveTrans(hash) {
        const trans = this.transactions[hash]
        const otherAddresses = this.wallet.accounts.filter(
          (acct) => {
            return acct.address != this.wallet.owner
          }
        ).map((acct)=>{return acct.address})
        const otherSignatories = sortAddresses(otherAddresses, 0)
        await web3Enable('DoraFactory Multisig')
        const sender = this.wallet.owner
        const injector = await web3FromAddress(sender)
        // a way to calculate the maxweight
        const dumbExt = window.api.tx.multisig.approveAsMulti(
          this.wallet.threshold,
          otherSignatories,
          trans.when,
          hash,
          0
        )
        const info =  await dumbExt.paymentInfo(sender)
        const extrinsic = window.api.tx.multisig.approveAsMulti(
          this.wallet.threshold,
          otherSignatories,
          trans.when,
          hash,
          info.partialFee
        )
        
        extrinsic.signAndSend(sender, { signer: injector.signer }, ({ status, events, dispatchError }) => {
          if (status.isInBlock) {
            this.$message.info('Extrinsics in block with hash: ' + status.asInBlock)
          }
          if (status.isFinalized) {
            if (dispatchError) {
              if (dispatchError.isModule) {
                // for module errors, we have the section indexed, lookup
                const decoded = api.registry.findMetaError(dispatchError.asModule)
                const { docs, name, section } = decoded
                this.$message.error(`${section}.${name}: ${docs.join(' ')}`)
              } else {
                // Other, CannotLookup, BadOrigin, no extra info
                this.$message.error(ispatchError.toString())
              }
            } else {
              this.$message.success('Approval completed!')
            }
          }
        })
      }
    },
    mounted: async function() {
      if (window.api) {
        const myMultisigs = await window.api.query.multisig.multisigs.entries(this.wallet.address)
        myMultisigs.forEach(([key, exposure]) => {
          const keys = key.toHuman()
          const trans = exposure.toJSON()
          // as polkdot extension provides us substrate address, we have to convert first to compare
          const owner = toSubstrateAddr(trans.depositor)
          // group transactions by depositor
          if(owner == this.wallet.owner) {
            this.createdTrans[keys[1]] = trans
          } else {
            this.pendingTrans[keys[1]] = trans
          }
        })
        const myCalls = await window.api.query.multisig.calls.entries()
        myCalls.forEach(([key, exposure]) => {
          const keys = key.toHuman()
          const callInfo = exposure.toHuman()
          this.calls[keys[0]] = callInfo
        })
      }
    }
}
</script>
<template>
<div class="all-transactions">
    <p class="title">TRANSACTIONS /</p>
    <div class="options">
        <ul>
            <li v-bind:class="{'selected': tabIndex==i}" v-for="(tab, i) in tabs" :key="i" @click="this.tabIndex=i">{{ tab }}</li>
        </ul>
        <div @click="openTrans" class="btn new-transaction">
            ↗ New transaction
        </div>
    </div>
    <div class="transaction-card-list">
        <div v-for="(trans, hash) in transactions" :key="hash" class="transaction-card">
            <div class="transaction-summary">
              <p>
                <span class="summary-label">CALL HASH:</span>
                <span class="summary-value">{{ hash }}</span>
              </p>
              <p>
                <span class="summary-label">TIME:</span>
                <span class="summary-value">{{ trans.when }}</span>
              </p>
              <p>
                <span class="summary-label">Depositor:</span>
                <AddressInfo :address="trans.depositor" />
              </p>
              <p v-if="callDetail(hash)">
                <span class="summary-label">PALLET/MODULEID:</span>
                <span class="summary-value">{{ callDetail(hash).section }}/{{ callDetail(hash).method }}</span>
              </p>
              <p v-if="callDetail(hash)">
                <span class="summary-label">PARAMETER:</span>
                <span class="summary-value">{{ callDetail(hash).args }}}</span>
              </p>
            </div>
            <div class="transaction-status">
              <div class="status-bar">
                  <span>Pending approval</span>
                  <div v-if="tabIndex==0" class="approve-btn" @click="approveTrans(hash)">Approve</div>
              </div>
              <p class="status-summary">{{ trans.approvals.length }} out of {{ wallet.threshold }} owners</p>
              <div class="progress-bar">
                <div class="progress-created">
                  <div class="circle-sign">+</div>
                  <span>Created</span>
                  <span class="connect-line"></span>
                </div>
                <div>
                <div class="progress-confirmed">
                  <div class="circle-sign"></div>
                  <div class="">Confirmed</div>
                  <span class="connect-line waiting"></span>
                </div>
                </div>
                <div class="progress-executed inactive">
                  <div class="circle-sign empty"></div>
                  <div class="">Executed</div>
                </div>
              </div>
              <div class="users-list">
                <div class="user-info" v-for="(addr, i) in trans.approvals" :key="i">
                  <img src="@/assets/avatar.svg" />
                  <div class="user-profile">
                    <p>Account</p>
                    <p><AddressInfo :address="addr" /></p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</div>
</template>
<style lang="stylus" scoped>
@import '@/assets/base.css'
.all-transactions
  width: 1000px
.title
  font-weight: bold
  font-size: 20px
  justify-content: flex-start
.options
  display: flex
  justify-content: space-between
  height: 40px
  ul
    list-style: none
    display: inline-flex
    justify-content: space-around
    padding-inline-start: 0
    li
      font-size: 20px
      font-weight: 600
      color: rgba(14, 14, 17, 0.5)
      margin-right: 20px
      cursor pointer
    .selected
      color: #FF761C
  .new-transaction
    margin-top: 0px
    padding: 10px 16px
    cursor pointer
.transaction-card-list
  margin-top: 30px
.transaction-card
  background: linear-gradient(190.57deg, rgba(255, 255, 255, 0.56) 19.25%, rgba(248, 248, 255, 0.71) 54.39%, rgba(255, 255, 255, 0.59) 90.02%)
  box-shadow: -10px 48.5967px 140px rgba(126, 123, 160, 0.2)
  backdrop-filter: blur(19px)
  border-radius: 34px
  padding: 30px
  display: flex
  margin-bottom: 20px
.transaction-summary
  font-size: 16px
  padding-right: 100px
  max-width: 35%
  overflow: hidden
  .summary-label
    font-weight: 600
    margin-right: 5px
.transaction-status
  padding-left: 100px
  .status-bar
    display: flex
    justify-content: space-between
    align-items: center
    font-weight: 600
    color: #FF761C
    background: url('@/assets/pending.svg') no-repeat left center
    padding-left: 26px
    &.failed
      color: #FD0053
      background-image: url('@/assets/failed.svg')
    &.success
      color: #00B272
      background-image: url('@/assets/success.svg')
  .approve-btn
    background: #ebebeb
    border: 3px solid #FFFFFF
    border-radius: 20px
    color: #00B272
    padding: 5px 10px
    cursor: pointer
.progress-bar
  display: inline-flex
  color: #00B272
  font-weight: 600
  .connect-line
    height: 1px
    width: 60px
    border-bottom: 1px solid
    margin: 0 6px
    &.waiting
      border-bottom: 1px dotted #B7B7B8
  .progress-created, .progress-confirmed, .progress-executed
    display: inline-flex
    align-items: center
    &.inactive
      color: rgba(14, 14, 17, 0.3)
  .circle-sign
    width: 12px
    height: 12px
    line-height: 12px
    color: white
    border-radius: 50%
    font-size: 12px
    text-align: center
    background: #00B272
    margin-right: 6px
    &.empty
      border: 1px solid #B7B7B8
      background: white
.users-list
  margin-left: 156px
  width: 1px
  position relative
  &:before 
    content : ""
    position: absolute
    left    : 0
    top  : 0
    height  : calc(100% - 15px)
    width   : 100%
    border-left:1px solid #00B272

  .user-info
    padding-left: 6px
    padding-top: 12px
    display: flex
    position: relative
    &:before
      content : ""
      position: absolute
      left    : 0
      top  : calc(50% + 6px)
      height  : 50%
      width   : 6px
      border-top:1px solid #00B272
    p
      margin-block: 0
      line-height: 15px
      height: 15px
    .user-profile
      font-size: 12px
      margin-left: 8px
      p
        display: flex
  img
    width: 30px
    height: 30px

</style>
