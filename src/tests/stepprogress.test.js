import { mount } from '@vue/test-utils'
import StepProgress from '@/components/StepProgress.vue'

test('Receive Assets should work', async () => {
    const wrapper = mount(StepProgress, {
        propsData: {
          current: 2
        }
    })
    const lines = wrapper.findAll('.connector-line')
    expect(lines.at(0).classes()).toContain('active')

    // switch to step3 and check
    await wrapper.setProps({current: 3})
    expect(lines.at(1).classes()).toContain('active')
})