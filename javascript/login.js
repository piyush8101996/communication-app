let btn = document.getElementById("btn")
let users=JSON.parse(localStorage.getItem('users'))
console.log(users,'.....users')
btn.addEventListener('click', function (e) {
    e.preventDefault()

    let username = document.getElementById('email')
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let password = document.getElementById('password')


    //Verify the login user
    if (username.value.length > 0 && password.value.length > 0 && username.value.match(mailformat)) {
        
        window.location.href="../pages/login_success.html";

    }


    //login feild validation
    if (username.value === "") {
        document.getElementById('error').innerHTML = "Email Feild Should not be empty"
        document.getElementById('email').classList.add('email')

    } else if (!username.value.match(mailformat))  {
        document.getElementById('error').innerHTML = "Email Format is not valid"
        document.getElementById('email').classList.add('email')

    }
    else {
        document.getElementById('error').innerHTML = ""
        document.getElementById('error').style.borderColor = ""
        document.getElementById('email').classList.remove('email')

    }

    if (password.value === "") {
        document.getElementById('passerr').innerHTML = "Password feild should not be empty"
        document.getElementById('password').classList.add('email')

    } else {
        document.getElementById('passerr').innerHTML = ""
        document.getElementById('password').classList.remove('email')

    }

})