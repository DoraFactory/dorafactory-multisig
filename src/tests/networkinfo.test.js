import { mount } from '@vue/test-utils'
import NetworkInfo from '@/components/NetworkInfo.vue'

test('NetworkInfo display should work', async () => {
    const networkName = 'TestNet'
    const $store = {
        getters: {
            'network/networkInfo': {
                display: networkName,
                logo: ''
            }
        }
    }
    const wrapper = mount(NetworkInfo, {
        global: {
          mocks: {
            $store
          },
        }
    })
    expect(wrapper.find('.selected-network').text()).toBe(networkName)
})

test('NetworkInfo display should fail', async () => {
    const $store = {
        getters: {
            'network/networkInfo': {
                display: '',
                logo: ''
            }
        }
    }
    const $message = vi.fn()
    const $router = {
      push: vi.fn()
    }
    const wrapper = mount(NetworkInfo, {
        global: {
          mocks: {
              $store,
              $message,
              $router
          },
        }
    })
    // component rendered
    expect(wrapper.find('h2').text()).toContain('Substrate Multisig')
    // error raised
    expect($message).toHaveBeenCalledWith(
        {
            message:'Please select a network!',
            type:'error',
            showClose: true
        }
    )
})