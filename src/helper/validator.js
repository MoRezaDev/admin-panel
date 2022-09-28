export const validator = (dataValidate) => {
  const errors = {};
  const Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!dataValidate.name) {
    errors.name = "Please Enter Your Full Name";
  } else {
    delete errors.name;
  }

  if (!dataValidate.email) {
    errors.email = "Please Enter your Email Address";
  } else if (!Regex.test(dataValidate.email)) {
    errors.email = "Please Enter Correct Email!";
  } else {
    delete errors.email;
  }

  if (!dataValidate.role) {
    errors.role = "You must Choose Role";
  } else {
    delete errors.role;
  }

  return errors;
};
