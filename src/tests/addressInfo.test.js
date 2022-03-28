import {render, fireEvent} from '@testing-library/vue'
import AddressInfo from '@/components/AddressInfo.vue'


test('Address abbreviation worked', async () => {
  // The render method returns a collection of utilities to query your component.
  const {getByRole, getByText} = render(AddressInfo, {
      props: {
          address: '15oF4uVJwmo4TdGW7VfQxNLavjCXviqxT9S1MgbjMNHr6Sp5'
      }
  })

  // assert we get filtered address display
  getByText('15oF4...r6Sp5')

  // assert to get the img element to run copy test
  getByRole('img')
})