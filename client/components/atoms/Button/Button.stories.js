import { Button } from ".";

export default {
  title: "Buttons",
  component: Button,
};

//👇 We create a “template” of how args map to rendering
const Template = args => (
  <Button {...args} block>
    Button
  </Button>
);

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  type: "button",
  variant: "primary",
  size: 60,
  onClick: () => {},
};

export const Ghost = Template.bind({});
Ghost.args = {
  type: "button",
  variant: "ghost",
  size: 60,
  onClick: () => {},
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Ghost.args,
  disabled: true,
};

export const Checking = Template.bind({});
Checking.args = {
  type: "button",
  variant: "checked",
};
