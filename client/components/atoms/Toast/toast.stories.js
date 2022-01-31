import { ToastBar } from ".";

export default {
  title: "Toast",
  component: ToastBar,
};

const Template = args => (
  <ToastBar {...args}>해당 날짜는 선택할 수 없습니다</ToastBar>
);

export const BarToast = Template.bind({});
BarToast.args = {};
