import { Select } from ".";

export default {
  title: "Select",
  component: Select,
};

const Template = args => <Select size={58} {...args} block />;

export const StorySelect = Template.bind({});
StorySelect.args = {
  variant: "select",
  placeholder: "입력해주세요.",
  onClick: () => {},
  name: "select",
  icon: "more",
  width: "312px",
};
