import { mount } from '@vue/test-utils'
import ReceiveAssets from '@/components/ReceiveAssets.vue'

test('Receive Assets should work', async () => {
    const networkName = 'TestNet'
    const address = '15oF4uVJwmo4TdGW7VfQxNLavjCXviqxT9S1MgbjMNHr6Sp5'
    const wrapper = mount(ReceiveAssets, {
        propsData: {
          address: address,
          networkName: networkName
        }
    })
    expect(wrapper.find('.description').text()).toContain(networkName)
    expect(wrapper.find('.address-info').text()).toBe(address)
})