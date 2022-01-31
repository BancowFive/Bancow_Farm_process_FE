// tel number regx
export const telNumberValidator = (event, func) => {
  const regex = /^[0-9\b -]{0,13}$/;
  if (regex.test(event.target.value)) {
    func(event.target.value);
  }
};

const telNumber12 = telNumber =>
  telNumber.replace(/-/g, "").replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");

const telNumber13 = telNumber =>
  telNumber.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");

export const replaceTelNumberRegx = telNumber => {
  switch (telNumber.length) {
    case 10:
    case 12:
      return telNumber12(telNumber);
    case 13:
      return telNumber13(telNumber);
    default:
      return telNumber;
  }
};

// email regx
export const emailValidator = email => {
  const emailRegex =
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  return emailRegex.test(email);
};
