const emailValidationCheck = async (email) => {
  const emailValidation = new RegExp("^[a-z]{2,}@[a-z]{2,}.[a-z]{2,}$");
  if (!emailValidation.test(email)) {
    const err = new Error("EMAIL_IS_NOT_VALID");
    err.statusCode = 409;
    throw err;
  }
  return emailValidation;
};

const passwordValidationCheck = async (password) => {
  const pwValidation = new RegExp(
    "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})"
  );
  if (!pwValidation.test(password)) {
    const err = new Error("PASSWORD_IS_NOT_VALID");
    err.statusCode = 409;
    throw err;
  }
  return pwValidation;
};

module.exports = {
  passwordValidationCheck,
  emailValidationCheck,
};
