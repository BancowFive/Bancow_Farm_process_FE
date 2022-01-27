import { FileInput } from ".";

export default {
  title: "Input",
  component: FileInput,
};

const Template = args => <FileInput {...args}>가축사육등록증</FileInput>;

export const FileInputUnuploaded = Template.bind({});
FileInputUnuploaded.args = {
  variant: "unuploaded",
  id: "farmer",
  onChange: () => {},
  width: "312px",
};

export const FileInputUploaded = Template.bind({});
FileInputUploaded.args = {
  variant: "uploaded",
  id: "farmer",
  onChange: () => {},
  width: "312px",
};
