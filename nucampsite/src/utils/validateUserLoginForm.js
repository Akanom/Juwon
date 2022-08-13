export const validateUserLoginForm = (values) => {
  const errors = {};
  if (values.password.length < 8) {
    errors.password = "The password must be at least 8 characters";
  } else if (!values.password) {
    errors.password = "Required";
  }

  if (values.username.length < 6 || values.username.length > 15) {
    errors.username =
      "username must be at least 6 characters, and at most 15 characters";
  } else if (!values.username) {
    errors.username = "Required";
  }
  return errors;
};
