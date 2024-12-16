document.addEventListener("DOMContentLoaded", () => {
  // Select all inputs and buttons
  const inputs = {
    firstName: document.querySelector("#firstName"),
    lastName: document.querySelector("#lastName"),
    email: document.querySelector("#email"),
    dob: document.querySelector("#dod"),
    phone: document.querySelector("#phone"),
    password1: document.querySelector("#password1"),
    password2: document.querySelector("#password2"),
  };
  const buttons = {
    submit: document.querySelector("#submitButton"),
    reset: document.querySelector("#resetButton"),
  };

  // Disable buttons initially
  buttons.submit.disabled = true;
  inputs.password2.disabled = true;

  // Validation patterns
  const patterns = {
    name: /^[a-zA-Z]+$/, // Only letters
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, // Email format
    phone: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/, // US phone number
    dob: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, // YYYY-MM-DD format
    password:
      /^(?=(.*[A-Z]){2,})(?=(.*[a-z]){2,})(?=(.*[\W_]){2,})(?!.*\s).{8,18}$/, // Password match
  };

  // Validate individual input values
  const validateInput = () => {
    const firstNameValid = patterns.name.test(inputs.firstName.value.trim());
    const lastNameValid = patterns.name.test(inputs.lastName.value.trim());
    const emailValid = patterns.email.test(inputs.email.value.trim());
    const phoneValid = patterns.phone.test(inputs.phone.value.trim());
    const dobValid = patterns.dob.test(inputs.dob.value.trim());
    const password1Valid = patterns.password.test(
      inputs.password1.value.trim()
    );
    const password2Valid =
      password1Valid &&
      inputs.password1.value.trim() === inputs.password2.value.trim();

    // Enable/disable password2 based on password1 validity
    inputs.password2.disabled = !password1Valid;

    // Enable/disable submit button based on all validations
    buttons.submit.disabled = !(
      firstNameValid &&
      lastNameValid &&
      emailValid &&
      phoneValid &&
      dobValid &&
      password1Valid &&
      password2Valid
    );
  };

  // Add input event listener to all form inputs
  Object.values(inputs).forEach((input) => {
    input.addEventListener("input", validateInput);
  });
});
