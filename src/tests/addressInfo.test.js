import { mount } from '@vue/test-utils'
import AddressInfo from '@/components/AddressInfo.vue'
import { vi } from 'vitest'


test('Address abbreviation should work', async () => {
  // mock the copy method inside
  const copyMock = vi.fn()
  const wrapper = mount(AddressInfo, {
    propsData: {
      address: '15oF4uVJwmo4TdGW7VfQxNLavjCXviqxT9S1MgbjMNHr6Sp5'
    }
  })
  wrapper.vm.copy = copyMock
  // check abbreviation
  expect(wrapper.find('label').text()).toBe('15oF4...r6Sp5')

  // test copy item
  await wrapper.find('img').trigger('click')
  expect(copyMock.mock.calls.length).toBe(1)
})