import { mount } from '@vue/test-utils'
import CreateWallet from '@/components/CreateWallet.vue'

test('Create wallet should work', async () => {
    const wrapper = mount(CreateWallet, {
        global: {
          stubs: ["RouterLink"],
        }
    })
    expect(wrapper.find('h3').text()).toBe('Create a wallet')
    expect(wrapper.html()).toContain('to="/create-wallet"')
})