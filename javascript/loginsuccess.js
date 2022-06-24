var loginuser = JSON.parse(localStorage.getItem("loginusers"))

var email=loginuser[0].email;
console.log(email)
document.getElementById('user').innerHTML= email

let logoutbtn=document.getElementById('logout')

logoutbtn.addEventListener('click', function () {
    localStorage.removeItem('loginusers');
  });
