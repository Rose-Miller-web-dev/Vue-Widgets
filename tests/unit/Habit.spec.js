import { mount } from "@vue/test-utils";
import Habit from "./../../src/components/Habit.vue";
describe("Habit", () => {
  it("makes sure the habit name is rendered", () => {
    const habitName = "Learn something new";
    const wrapper = mount(Habit, {
      propsData: {
        name: habitName,
      },
    });
    expect(wrapper.props().name).toBe(habitName);
    expect(wrapper.text()).toContain(habitName);
  });
});