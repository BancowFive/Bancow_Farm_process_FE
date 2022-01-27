import { ProgressStep } from ".";

export default {
  title: "Progress",
  component: ProgressStep,
};

export const Step = args => <ProgressStep activeStep={1} {...args} />;
