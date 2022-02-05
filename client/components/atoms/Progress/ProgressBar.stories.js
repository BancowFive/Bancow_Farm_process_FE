import { ProgressBar } from ".";

export default {
  title: "Progress",
  component: ProgressBar,
};

export const Bar = args => <ProgressBar percentage={"10%"} {...args} />;
