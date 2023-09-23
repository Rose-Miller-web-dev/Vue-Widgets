import {mount} from "@vue/test-utils"
import TestUtil from "./../../src/components/TestUtil"

describe("TestUtil", () => {
    it("name rendering", () => {
        const name = "A new name"
        const wrapper = mount(TestUtil, {
            propsData: {
                name: name
            }
        })

        expect(wrapper.props().name).toBe(name)
        expect(wrapper.text()).toContain(name)

    })

})