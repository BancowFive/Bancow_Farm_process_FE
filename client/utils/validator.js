// tel number regx
export const phoneNumberValidator = event => {
  const regex = /^[0-9\b -]{0,13}$/;
  if (regex.test(event.target.value)) {
    return event.target.value;
  }
};

const phoneNumber12 = phoneNumber =>
  phoneNumber.replace(/-/g, "").replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");

const phoneNumber13 = phoneNumber =>
  phoneNumber.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");

export const replacePhoneNumberRegx = phoneNumber => {
  switch (phoneNumber.length) {
    case 10:
    case 12:
      return phoneNumber12(phoneNumber);
    case 13:
      return phoneNumber13(phoneNumber);
    default:
      return phoneNumber;
  }
};

// email regx
export const emailValidator = email => {
  const emailRegex =
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  return emailRegex.test(email);
};
