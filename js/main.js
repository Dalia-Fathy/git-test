var signupName = document.getElementById("signupName")
var signupEmail = document.getElementById("signupEmail")
var signupPassword = document.getElementById("signupPassword")
var alertNameSign = document.getElementById("alertNameSign")
var alertEmailSign = document.getElementById("alertEmailSign")
var alertPasswordSign = document.getElementById("alertPasswordSign")

var exist = document.getElementById("exist")
var success = document.getElementById("success")
var exist1 = document.getElementById("exist1")

var signinEmail = document.getElementById("signinEmail")
var signinPassword = document.getElementById("signinPassword")
var alertEmail = document.getElementById("alertEmail")
var alertPassword = document.getElementById("alertPassword")

var bow = document.getElementById("xx")

if (localStorage.getItem("userLogged") != null) {
    document.getElementById("bow").innerHTML += " " + JSON.parse(localStorage.getItem("userLogged"));
};

function regexEmail() {
    var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if (emailRegex.test(signinEmail.value) == true) {
        alertEmail.classList.add("d-none")
        signinEmail.classList.add("is-valid")
        signinEmail.classList.remove("is-invalid")
    } else {
        alertEmail.classList.remove("d-none")
        signinEmail.classList.add("is-invalid")
        signinEmail.classList.remove("is-valid")
    }
}
signinEmail.addEventListener("change", regexEmail)

function regexPassword() {
     var passwordRegex = /((?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[\W]).{6,20})/
    if (passwordRegex.test(signinPassword.value) == true) {
        alertPassword.classList.add("d-none")
        signinPassword.classList.add("is-valid")
        signinPassword.classList.remove("is-invalid")
    } else {
        alertPassword.classList.remove("d-none")
        signinPassword.classList.add("is-invalid")
        signinPassword.classList.remove("is-valid")
    }
}
signinPassword.addEventListener("change", regexPassword)

function isLoginEmpty() {

    if (signinPassword.value == "" || signinEmail.value == "") {
        return false
    } else {
        return true
    }
}
function login() {
    for (var i = 0; listPerson.length; i++) {
        if (listPerson[i].email == signinEmail.value && listPerson[i].password == signinPassword.value) {

            window.location.href = "welcome.html";
            localStorage.setItem("userLogged", JSON.stringify(listPerson[i].name))
        }
    }
}



function regexNameup() {
    var nameRegex = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/
    if (nameRegex.test(signupName.value) == true) {
        alertNameSign.classList.add("d-none")
        signupName.classList.add("is-valid")
        signupName.classList.remove("is-invalid")
        return true
    } else {
        alertNameSign.classList.remove("d-none")
        signupName.classList.add("is-invalid")
        signupName.classList.remove("is-valid")
        return false
    }
}
signupName.addEventListener("change", regexNameup)

function regexEmailup() {
    var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if (emailRegex.test(signupEmail.value) == true) {
        alertEmailSign.classList.add("d-none")
        signupEmail.classList.add("is-valid")
        signupEmail.classList.remove("is-invalid")
        return true
    } else {
        alertEmailSign.classList.remove("d-none")
        signupEmail.classList.add("is-invalid")
        signupEmail.classList.remove("is-valid")
        return false
    }
}
signupEmail.addEventListener("change", regexEmailup)

function regexPasswordup() {
      var passwordRegex = /((?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[\W]).{6,20})/
    if (passwordRegex.test(signupPassword.value) == true) {
        alertPasswordSign.classList.add("d-none")
        signupPassword.classList.add("is-valid")
        signupPassword.classList.remove("is-invalid")
        return true
    } else {
        alertPasswordSign.classList.remove("d-none")
        signupPassword.classList.add("is-invalid")
        signupPassword.classList.remove("is-valid")
        return false
    }
}
signupPassword.addEventListener("change", regexPasswordup)

var listPerson = []
if (localStorage.getItem("LIST") == null) {
    listPerson = [];
} else {
    listPerson = JSON.parse(localStorage.getItem("LIST"))
    if (bow != null) {
        for (let i = 0; i < listPerson.length; i++) {
            if (JSON.parse(localStorage.getItem("userLogged")) == listPerson[i].email) {
                bow.innerHTML += "" + JSON.parse(localStorage.getItem("LIST"))[i].name
            }

        }
    }
}

function signUp() {
    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        exist.classList.remove("d-none")
        success.classList.add("d-none")
    }
    else {
        exist.classList.add("d-none")
        success.classList.remove("d-none")
    }
    if (regexNameup() == true && regexEmailup() == true && regexPasswordup() == true) {
        var person = {
            name: signupName.value,
            email: signupEmail.value,
            password: signupPassword.value
        }
        listPerson.push(person)
        localStorage.setItem("LIST", JSON.stringify(listPerson))
    }
}



function Logout() {
    event.preventDefault()
    window.location.href = "index.html";
  
    localStorage.removeItem("LIST", JSON.stringify(listPerson))
}
