<script>
import { Keyring} from '@polkadot/keyring'

export default {
    props: {
        address: {
            type: String,
            default: ''
        }
    },
    computed:{
        abbrev: function() {
            const addr = this.address
            if (addr.length > 10) {
                return addr.substring(0, 5) + '...' + addr.substring(addr.length-5)
            }
            return addr
        }
    },
    methods: {
        copy() {
            navigator.clipboard.writeText(this.address).then(
                ()=>{this.$message.success('Address copied!')},
                ()=>{this.$message.error('Copy failed!')}
            )
        },
        toSubstrateAddr(address) {
            const keyring = new Keyring()
            const addr =  keyring.encodeAddress(keyring.decodeAddress(address),42) 
            return addr
        }
    }
}
</script>

<template>
  <label>{{ abbrev }}</label>
  <img
    style="margin-left:5px;cursor:pointer"
    src="@/assets/copy.svg"
    @click="copy"
  >
</template>