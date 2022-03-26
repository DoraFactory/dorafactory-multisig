import { Keyring} from '@polkadot/keyring'

export function toSubstrateAddr(address) {
    const keyring = new Keyring()
    const addr =  keyring.encodeAddress(keyring.decodeAddress(address),42) 
    return addr
}