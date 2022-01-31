import { Calendar } from ".";

export default {
  title: "Calendar",
  component: Calendar,
};

//달력
const Template = args => <Calendar {...args} />;

export const MobileCalendar = Template.bind({});
MobileCalendar.args = {};
