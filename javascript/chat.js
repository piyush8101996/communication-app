let sendbutton=document.getElementById('send')
let app = document.querySelector('#list');
var loginuser = JSON.parse(localStorage.getItem("loginusers"))
var fullname=loginuser[0].fullname;
document.getElementById('username').innerHTML=fullname;
let logoutbtn=document.getElementById('logout')



sendbutton.addEventListener('click',function(e){
      e.preventDefault();
      var userchat = JSON.parse(localStorage.getItem("chatmsg"))
    ? JSON.parse(localStorage.getItem("chatmsg"))
    : [];


      let msg=document.getElementById('text');
      const d = new Date();
      const date=d.getDate()+"/"+eval(d.getMonth()+1)+"/"+d.getDate();
      if(msg.value.trim()){
         userchat.push({date:date,msg:msg.value})  
            let span=document.createElement('span')
            span.textContent=date;
            let li = document.createElement('li');
            li.textContent = date+"  "+fullname+" : "+ msg.value;
            localStorage.setItem("chatmsg", JSON.stringify(userchat));

            document.getElementById("text").innerHTML=" ";

        app.append(li);

      }else{
        window.alert("please Enter your msg")
      }


})

logoutbtn.addEventListener('click', function () {
  localStorage.removeItem('loginusers');
});