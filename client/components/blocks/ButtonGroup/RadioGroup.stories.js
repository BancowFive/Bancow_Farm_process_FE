import { RadioGroup } from ".";
import { RadioChecked, RadioUnChecked } from "../../atoms/Button/Radio.stories";

export default {
  title: "RadioGroup",
  component: RadioGroup,
};

export const UnChecked = args => (
  <RadioGroup width="312px" {...args}>
    <RadioUnChecked {...RadioUnChecked.args} />
    <RadioUnChecked {...RadioUnChecked.args} />
  </RadioGroup>
);

export const Active = args => (
  <RadioGroup width="312px" {...args}>
    <RadioUnChecked {...RadioUnChecked.args} />
    <RadioChecked {...RadioChecked.args} />
  </RadioGroup>
);
