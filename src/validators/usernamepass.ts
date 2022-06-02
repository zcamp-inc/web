
export function validateName(value: string) {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value.toLowerCase() !== "john") {
      error = "Lol! You're not john😂";
    }
    return error;
  }
  var emailRegEx = new RegExp("\\b" + ".edu.ng" + "\\b");


 export function validateEmail(value: string) {
    let error;
    if (!value) {
      error = "Email is Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    } else if (!emailRegEx.test(value)) {
      error = "Not a Student?"
    }
    return error;
  }

  const strongPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
 export function validatePass(value: string) {
    let error;
    if (!value) {
      error = "Password is Required";
    } else if (!strongPass.test(value)) {
      error = "Password must contain atleast 1 cap letter and 1 number";
    } else if (value.length < 8) {
      error = "Password must be atleast 8 characters";
    } else if (value === "password") {
      error = "I think you're not serious";
    }
    return error;
  }