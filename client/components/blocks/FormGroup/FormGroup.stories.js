import { FormGroup } from ".";
import { InputPrimary } from "../Form/Input.stories";
import { ButtonCheck } from "../Button/Button.stories";

export default {
  title: "FormGroup",
  component: FormGroup,
};

export const Auth = args => (
  <FormGroup type="auth" width="312px" {...args}>
    <div>
      <InputPrimary {...InputPrimary.args} width="100%" />
      <ButtonCheck {...ButtonCheck.args} />
    </div>
  </FormGroup>
);

export const Address = args => (
  <FormGroup type="address" width="312px" {...args}>
    <div>
      <InputPrimary {...InputPrimary.args} width="100%" />
      <ButtonCheck {...ButtonCheck.args} />
    </div>
  </FormGroup>
);
