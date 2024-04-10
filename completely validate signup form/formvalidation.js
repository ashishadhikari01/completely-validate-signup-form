let submitBtn = document.querySelector(".submit-btn");
let myForm=document.querySelector("#myform")
let submitdefault
let nameStatus,addressStatus,genderStatus,emailStatus,phoneStatus,dobStatus,subjectStatus,passwordStatus,confirmPasswordStatus,extraActivitesStatus

submitBtn.addEventListener("click", function(event) {
    // let submitdefault=true
    event.preventDefault()

function greenshadow(field){
   field.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)"
    }
    function redshadow(field){
   field.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
    }

    let name = document.querySelector(".name");
    let nameErr = document.querySelector("#name-err");
    let namepattern = /[\d$#^&*()!]/

    if (name.value === "") {
        nameErr.textContent = "*Required";
        nameStatus=false
        redshadow(name)
    } else if (name.value.length < 8) {
        nameErr.textContent = "Invalid name";
        nameStatus=false
        redshadow(name)
    } else if (namepattern.test(name.value)) {
        nameErr.textContent = "Special characters and digits are not allowed!";
        nameStatus=false
        redshadow(name)
    } else {
        nameStatus=true
        nameErr.textContent=""
        greenshadow(name)
    
    }

    let address = document.getElementsByName("address")[0];
    let addressErr = document.querySelector("#address-err");
    let addresspattern = /[\d$#^&*()!]/;

    if (address.value === "") {
        addressErr.textContent = "*Required";
        addressStatus=false
        redshadow(address)
    } else if (address.value.length < 8 || addresspattern.test(address.value)) {
        addressErr.textContent = "Invalid Address";
        addressStatus=false
        redshadow(address)
    } else {
        addressStatus=true
        greenshadow(address)
        addressErr.textContent=""
    }

    let gender = document.getElementsByName("gender")
    let genderWrapper=document.querySelector(".gender-wrapper")
    let genderErr = document.querySelector("#gender-err");
    let genderstatus = false;

    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderstatus = true;
            break;
        }
    }

    if (genderstatus) {
        genderStatus=true
        greenshadow(genderWrapper)
        genderErr.textContent=""
    } else {
        genderErr.textContent = "*Required";
        genderStatus=false
        redshadow(genderWrapper)
    }

    let email = document.getElementsByName("email")[0];
    let emailErr = document.querySelector("#email-err");
    let emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.value === "") {
        emailErr.textContent = "*Required"
        emailStatus=false
        redshadow(email)
    } else if (!emailpattern.test(email.value)) {
        emailErr.textContent = "Invalid email"
        emailStatus=false
        redshadow(email)
    } else {
        emailErr.textContent = ""
        emailStatus=true
        greenshadow(email)
    }

    let phone = document.getElementsByName("phone")[0]
    let phoneErr = document.querySelector("#phone-err")
    let phonepattern = /^[0-9]{10}$/;

    if (phone.value === "") {
        phoneErr.textContent = "*Required";
        phoneStatus=false
        redshadow(phone)
    } else if (!phonepattern.test(phone.value)) {
        phoneErr.textContent = "Invalid phone";
        phoneStatus=false
        redshadow(phone)
    } else {
        phoneStatus=true
        greenshadow(phone)
        phoneErr.textContent=""
    }

     let dob=document.getElementsByName("dob")[0]  
     let dobErr=document.querySelector("#dob-err")
     let datepattern= /^\d{2}\/\d{2}\/\d{4}$/

     let mydate=new Date(dob.value)
     let myyear= mydate.getFullYear()
     let currentdate=new Date()
     let currentyear=currentdate.getFullYear()
     let yearDifference=currentyear-myyear

     if(dob.value===""){
        dobStatus=false
        dobErr.textContent="*Required"
        redshadow(dob)
     }
     else if(yearDifference<=17){
        dobStatus=false
        dobErr.textContent="Age must be equal to or greater than 18"
        redshadow(dob)
     }
     else{
        greenshadow(dob)
        dobErr.textContent=""
        dobStatus=true
     }

    let subjects = document.getElementsByName("subject[]");
    let subjectErr = document.querySelector("#subject-err");
    let subjectWrapper=document.querySelector(".subject-wrapper")
    let atleastonechecked = false;

    subjects.forEach(subject => {
        if (subject.checked) {
            atleastonechecked = true;
        }
    });

    if (atleastonechecked) {
        subjectStatus=true
        greenshadow(subjectWrapper)
        subjectErr.textContent=""
    } else {
        subjectErr.textContent = "*Required";
        subjectStatus=false
        redshadow(subjectWrapper)
    }

    let extraActivites=document.getElementsByName("extra-activites")[0]
     let extraErr=document.querySelector("#extra-err")
     if(extraActivites.value==="select"){
        extraErr.textContent="*Required"
        redshadow(extraActivites)
        extraActivitesStatus=false
     }
     else{
        greenshadow(extraActivites)
        extraErr.textContent=""
        extraActivitesStatus=true
     }

    let password = document.getElementsByName("password")[0];
    let passwordErr = document.querySelector("#password-err");
    let passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    if (password.value === "") {
        passwordErr.textContent = "*Required";
        passwordStatus=false
        redshadow(password)
    } 
    else if (!passwordpattern.test(password.value)) {
        passwordErr.textContent = "Enter a password with at least one lowercase, uppercase, digit, special character, and be between 8-15 characters";
    submitdefault=false
    redshadow(password)
    } 
    else {
        passwordStatus=true
        greenshadow(password)
        passwordErr.textContent=""
    }

    let confirmPassword = document.getElementsByName("confirm-password")[0];
    let confirmPasswordErr = document.querySelector("#confirm-password-err");

    if (confirmPassword.value === "") {
        confirmPasswordErr.textContent = "*Required";
        confirmPasswordStatus=false
        redshadow(confirmPassword)
    } else if (confirmPassword.value ===password.value) {
        confirmPasswordStatus=true 
        greenshadow(confirmPassword)
        confirmPasswordErr.textContent=""
        
    } else {
        confirmPasswordErr.textContent = "confirm password must match with password";
        confirmPasswordStatus=false
        redshadow(confirmPassword)
    }

    if(nameStatus==true && addressStatus==true && genderStatus==true && emailStatus==true && phoneStatus==true && dobStatus==true && subjectStatus==true && passwordStatus==true && confirmPasswordStatus==true && extraActivitesStatus==true) {
        window.location.href = "./formgetsubmitted.html";
        name.value=""
        address.value=""
        gender.value=""
        email.value=""
        phone.value=""
        dob.value=""
        subjects.value=""
        extraActivites.value=""
        password.value=""
        confirmPassword.value=""
    }
});
