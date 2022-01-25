import { Radio } from ".";

export default {
  title: "Radio",
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
  block: true,
  width: "148px",
};

export const RadioUnChecked = Template.bind({});
RadioUnChecked.args = {
  ...RadioChecked.args,
  variant: "unchecked",
};
