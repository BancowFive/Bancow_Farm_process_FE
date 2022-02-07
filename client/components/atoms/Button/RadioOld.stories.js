import { Radio } from ".";

export default {
  title: "Radio Buttons",
  component: Radio,
};

//👇 We create a “template” of how args map to rendering
const Template = args => (
  <Radio size={58} {...args}>
    Button
  </Radio>
);

//👇 Each story then reuses that template
export const RadioChecked = Template.bind({});
RadioChecked.args = {
  id: 1,
  value: "cow",
  name: "cow-choice",
  variant: "checked",
};
