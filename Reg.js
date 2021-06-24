function validateForm() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let passwordConfirm = document.getElementById("passwordConfirm");
    let city = document.getElementById("city");
    let gender = document.getElementById("gender");
    let email = document.getElementById("email");
    let errors = "";
    //username checking
    if (username.value == "") {
      errors += "Username Required";
    }
    //password checking
    if (password.value == "" || password.value.length < 6) {
      errors += "<br /> Password is required with minimum length of 6";
    }
    //password confirmation checking
    if (passwordConfirm.value != password.value) {
      errors += "<br/> Both passwords should be same";
    }
    //city checking
    if (city.value == "" || city.value == "none") {
      errors += "<br/> Choose a City name";
    }
    //gender checking
    if (gender.value == "") {
      errors += "<br/> Select Gender";
    }

    //if the form has errors, then showing the errors
    if (errors != "") {
      document.getElementById("errorSection").innerHTML = errors;
      return false;
    } else {
      return true;
    }
  }