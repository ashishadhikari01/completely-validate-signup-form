let submitBtn = document.querySelector(".submit-btn");
let myForm=document.querySelector("#myform")
submitBtn.addEventListener("click", function(event) {
    // let submitdefault=true
    event.preventDefault()

    let name = document.querySelector(".name");
    let nameErr = document.querySelector("#name-err");
    let namepattern = /[\d$#^&*()!]/;

    if (name.value === "") {
        nameErr.textContent = "Enter your name!";
        submitdefault=false
    } else if (name.value.length < 8) {
        nameErr.textContent = "Enter a valid name!";
    } else if (namepattern.test(name.value)) {
        nameErr.textContent = "Special characters and digits are not allowed!";
        submitdefault=false
    } else {
        nameErr.textContent = "Submitted";
        // submitdefault=true
    
    }

    let address = document.getElementsByName("address")[0];
    let addressErr = document.querySelector("#address-err");
    let addresspattern = /[\d$#^&*()!]/;

    if (address.value === "") {
        addressErr.textContent = "Enter your address!";
        submitdefault=false
    } else if (address.value.length < 8 || addresspattern.test(address.value)) {
        addressErr.textContent = "Enter a valid address!";
        submitdefault=false
    } else {
        addressErr.textContent = "Submitted";
        // submitdefault=true
    
    }

    let gender = document.getElementsByName("gender");
    let genderErr = document.querySelector("#gender-err");
    let genderstatus = false;

    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderstatus = true;
            break;
        }
    }

    if (genderstatus) {
        genderErr.textContent = "Submitted";
        // submitdefault=true
    } else {
        genderErr.textContent = "Select one option";
        submitdefault=false
    }

    let email = document.getElementsByName("email")[0];
    let emailErr = document.querySelector("#email-err");
    let emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.value === "") {
        emailErr.textContent = "Enter your email";
        submitdefault=false
    } else if (!emailpattern.test(email.value)) {
        emailErr.textContent = "Enter a valid email";
        submitdefault=false
    } else {
        emailErr.textContent = "Submitted";
        // submitdefault=true
    }

    let phone = document.getElementsByName("phone")[0];
    let phoneErr = document.querySelector("#phone-err");
    let phonepattern = /^[0-9]{10}$/;

    if (phone.value === "") {
        phoneErr.textContent = "Enter your phone";
        submitdefault=false
    } else if (!phonepattern.test(phone.value)) {
        phoneErr.textContent = "Enter a valid phone";
        submitdefault=false
    } else {
        phoneErr.textContent = "Submitted";
        // submitdefault=true
    }

    let subjects = document.getElementsByName("subject[]");
    let subjectErr = document.querySelector("#subject-err");
    let atleastonechecked = false;

    subjects.forEach(subject => {
        if (subject.checked) {
            atleastonechecked = true;
        }
    });

    if (atleastonechecked) {
        subjectErr.textContent = "Submitted";
        // submitdefault=true
    } else {
        subjectErr.textContent = "Check at least one";
        submitdefault=false
    }

    let password = document.getElementsByName("password")[0];
    let passwordErr = document.querySelector("#password-err");
    let passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    if (password.value === "") {
        passwordErr.textContent = "Enter your password";
        submitdefault=false
    } 
    // else if (!passwordpattern.test(password.value)) {
    //     passwordErr.textContent = "Enter a password with at least one lowercase, uppercase, digit, special character, and be between 8-15 characters";
    // submitdefault=false
    // } 
    else {
        passwordErr.textContent = "Submitted";
        // submitdefault=true
    }

    let confirmPassword = document.getElementsByName("confirm-password")[0];
    let confirmPasswordErr = document.querySelector("#confirm-password-err");

    if (confirmPassword.value === "") {
        confirmPasswordErr.textContent = "Please confirm your password";
        submitdefault=false
    } else if (confirmPassword.value === password.value) {
        confirmPasswordErr.textContent = "Submitted";
        // submitdefault=true
    } else {
        confirmPasswordErr.textContent = "Password and confirm password do not match";
        submitdefault=false
    }
    if(submitdefault){
        myForm.button()
    }
});
