import { Button } from ".";

export default {
  title: "Button",
  component: Button,
};

//👇 We create a “template” of how args map to rendering
const Template = args => (
  <Button {...args} block>
    Button
  </Button>
);

//👇 Each story then reuses that template
export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  type: "button",
  variant: "primary",
  size: 60,
  onClick: () => {},
  width: "360px",
};

export const ButtonGhost = Template.bind({});
ButtonGhost.args = {
  type: "button",
  variant: "ghost",
  size: 60,
  onClick: () => {},
  disabled: false,
  width: "360px",
};

export const ButtonDisabled = Template.bind({});
ButtonDisabled.args = {
  ...ButtonGhost.args,
  disabled: true,
  width: "360px",
  size: 60,
};

export const ButtonCheck = Template.bind({});
ButtonCheck.args = {
  type: "button",
  variant: "checked",
  width: "90px",
  size: 60,
};
