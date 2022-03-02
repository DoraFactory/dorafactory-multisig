<script>
import { RouterLink } from 'vue-router'
import StepProgress from '@/components/StepProgress.vue'
import IconPolkadot from '@/components/icons/IconPolkadot.vue'
import { mapState } from 'vuex'
import {
  web3Accounts,
  web3Enable,
  web3FromAddress,
  web3ListRpcProviders,
  web3UseRpcProvider
} from '@polkadot/extension-dapp'
import SelectAccount from '../components/SelectAccount.vue'
import Modal from '@/components/Modal.vue'


export default {
    data: function() {
        return {
            allAccounts: [],
            selectedAccount:null,
            show: false,
        }
    },
    components:{ StepProgress, IconPolkadot, SelectAccount, Modal },
    computed: mapState({
      network: state => state.network.selected,
    }),
    methods: {
        async connect() {
            const extensions = await web3Enable('DoraFactory Multisig')
            if (extensions.length === 0) {
                this.$message(
                    {
                        message:'Connect Polkadot Extension failed, please check your browser!',
                        type:'error',
                        showClose: true
                    }
                )
                return
            }
            this.allAccounts = await web3Accounts()
            if (this.allAccounts.length === 0) {
                this.$message(
                    {
                        message:'No availabe accounts found!',
                        type:'error',
                        showClose: true
                    }
                )
                return
            } 
            if (this.allAccounts.length > 1) {
                this.show = true
            } else {
                this.selectedAccount = this.allAccounts[0]
            }
        },
        change(v) {
            console.log(v)
        },
        cancel() {
            this.$message(
                {
                    message:'Canceled',
                    type:'error',
                    showClose: true
                }
            );
        },
    }
}
</script>
<template>
<div class="create-wallet-steps">
    <StepProgress :current=1 />
    <p class="intro-text">1、Select network on which to create your multisig wallet.The app is currently pointing to</p>
    <div class="selected-network">
      {{ network.name }}
   </div>
  <p class="guide-text">
      2、Please use Polkadot JS Extension.
  </p>
  <div class="extension-btn">
      <IconPolkadot />
      Polkadot
  </div>
  <Modal :showModal="show" @close="show=false">
    <template v-slot:content>
    <SelectAccount :accounts="allAccounts" @change="change" />
    </template>
  </Modal>
  <div class="btn-group">
      <div class="btn" @click="connect">Connect Wallet</div>
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