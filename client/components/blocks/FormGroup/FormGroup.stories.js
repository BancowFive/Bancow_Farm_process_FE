import { FormGroup } from ".";
import { InputPrimary } from "../../atoms/Form/Input.stories";
import { ButtonCheck } from "../../atoms/Button/Button.stories";

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
