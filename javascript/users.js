//for logout
let logoutbtn=document.getElementById('logout')
logoutbtn.addEventListener('click', function () {
    localStorage.removeItem('loginusers');
  });

//manage users data
let user_records = JSON.parse(localStorage.getItem("registerusers"))
      ? JSON.parse(localStorage.getItem("registerusers"))
      : [];

user_records.map(({email,fullname,id})=>{
    
})