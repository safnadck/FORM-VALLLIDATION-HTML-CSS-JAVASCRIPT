function validation() {
    if (document.formFill.Username.value === "") {
        document.getElementById("result").innerHTML = "Enter Username*";
        return false;
    } else if (document.formFill.Username.value.length < 6) {
        document.getElementById("result").innerHTML = "At least six letters*";
        return false;
    } else if (document.formFill.Email.value === "") {
        document.getElementById("result").innerHTML = "Enter your Email*";
        return false;
    } else if (document.formFill.password.value === "") {
        document.getElementById("result").innerHTML = "Enter your password*";
        return false;
    } else if (document.formFill.cpassword.value.length < 8) {
        document.getElementById("result").innerHTML = "Password must be 8 digits";
        return false;
    } else if (document.formFill.cpassword.value === "") {
        document.getElementById("result").innerHTML = "Enter confirm password";
        return false;
    } else if (document.formFill.cpassword.value !== document.formFill.password.value) {
        document.getElementById("result").innerHTML = "Passwords do not match*";
        return false;
    } else {
        // Assuming you want to show a popup when everything is valid
        popup.classList.add('open-slide');
        return false;
    }
}

var popup = document.getElementById('popup');

function closeSlide() {
    popup.classList.remove('open-slide');
}
