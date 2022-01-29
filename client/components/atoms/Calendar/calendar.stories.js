import { Calendar } from ".";

export default {
  title: "Calendar",
  component: Calendar,
};

const Template = args => <Calendar {...args} />;

export const MobileCalendar = Template.bind({});
MobileCalendar.args = {};

export const PCCalendar = Template.bind({});
MobileCalendar.args = {};
