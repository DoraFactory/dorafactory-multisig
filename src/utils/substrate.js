import { Keyring} from '@polkadot/keyring'
import { formatBalance } from '@polkadot/util'

export function toSubstrateAddr(address) {
    const keyring = new Keyring()
    const addr =  keyring.encodeAddress(keyring.decodeAddress(address),42) 
    return addr
}

export async function fetchBalance(address) {
    if (!window.api || !address) {
        return '0.00 DOT'
    }
    const registry = window.api.registry
    const unit = registry.chainTokens[0].toUpperCase()
    const decimal =  registry.chainDecimals[0]
    formatBalance.setDefaults(
      {
        'decimals': decimal,
        'unit': unit
      }
    )
    const res = await window.api.query.system.account(address)
    return formatBalance(res.data.free)
}