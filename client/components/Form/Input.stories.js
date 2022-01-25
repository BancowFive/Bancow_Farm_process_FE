import { Input } from ".";

export default {
  title: "Input",
  component: Input,
};

const Template = args => <Input size={58} type="text" {...args} />;

export const InputPrimary = Template.bind({});
InputPrimary.args = {
  variant: "primary",
  placeholder: "입력해주세요.",
  onClick: () => {},
  name: "primary",
  icon: "clear",
  width: "312px",
};

export const InputGhost = Template.bind({});
InputGhost.args = {
  variant: "ghost",
  placeholder: "입력해주세요.",
  onClick: () => {},
  name: "ghost",
  width: "312px",
};
