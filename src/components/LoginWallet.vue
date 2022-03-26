<script>
import RightArrow from './icons/IconRightArrow.vue'

export default {
    components: {RightArrow},
    methods: {
        loadWallet() {
            const storedWallets = localStorage.getItem('multisig-wallets')
            if (!storedWallets) {
            this.$message(
                {
                    message:'No wallets found!',
                    type:'error',
                    showClose: true
                }
            )
            this.$router.push('/')
            return
            }
            this.$store.commit('network/setWallet', JSON.parse(storedWallets)[0])
            this.$router.push('/asset')
        }
    }
}
</script>
<template>
<div class="login-wallet-main blur-card-bg">
    <h3>Login to existing wallet</h3>
    <div class="description">
        Already have a multisig wallet or want to access it from a different device? 
        Easily login your wallet using your wallet address.
    </div>
    <div class="btn btn-reverse">
        <div @click="loadWallet">
          Login to existing wallet  
          <RightArrow />
        </div>
    </div>
</div>
</template>
<style lang="stylus" scoped>
@import '@/assets/base.css'
.login-wallet-main {
    width: 473px;
    padding: 50px 40px;
}

</style>
