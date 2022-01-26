import { ProgressStep } from ".";

export default {
  title: "ProgressStep",
  component: ProgressStep,
};

export const ProgressStep = args => {
  <ProgressStep activeStep={1} {...args} />
}
