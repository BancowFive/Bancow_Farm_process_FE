import { ButtonGroup } from ".";
import {
  ButtonPrimary,
  ButtonGhost,
  ButtonDisabled,
} from "../Button/Button.stories";

export default {
  title: "ButtonGroup",
  component: ButtonGroup,
};

export const Disabled = args => (
  <ButtonGroup width="312px" {...args}>
    <ButtonGhost {...ButtonGhost.args} />
    <ButtonDisabled {...ButtonDisabled.args} />
  </ButtonGroup>
);

export const Active = args => (
  <ButtonGroup width="312px" {...args}>
    <ButtonGhost {...ButtonGhost.args} />
    <ButtonPrimary {...ButtonPrimary.args} />
  </ButtonGroup>
);
