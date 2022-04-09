import { mount } from '@vue/test-utils'
import LoginWallet from '@/components/LoginWallet.vue'
import { expect, vi } from 'vitest'


test('Login directly should fail', async () => {
    // mock the $message method inside
    const $message = vi.fn()
    const $router = {
      push: vi.fn()
    }
    const wrapper = mount(LoginWallet, {
        global: {
            mocks: {
              $message,
              $router
            }
        }
    })

    // check button exists
    const button = wrapper.find('div.btn>div')
    expect(button.exists()).toBe(true)
    expect(button.text()).toBe('Login to existing wallet')
  
    // test fail scenario
    await button.trigger('click')
    expect($message.mock.calls.length).toBe(1)
    // route to home after error message
    expect($router.push).toHaveBeenCalledWith('/')
  })
