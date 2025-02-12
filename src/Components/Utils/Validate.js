export const Validate = (name, email, password) => {
  const isNameValidate = /([a-zA-Z\s]+)/.test(name);
  const isEmailValidate = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const isPasswordValidate =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );
  if (!isNameValidate) return "Please Enter a valid fullName";
  if (!isEmailValidate) {
    return "Please Enter a valid Email address";
  }
  if (!isPasswordValidate) return "Please Enter a valid Password";

  return null;
};
