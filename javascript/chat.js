let sendbutton=document.getElementById('send')
let app = document.querySelector('#list');

let chatmsg=[]

sendbutton.addEventListener('click',function(e){
      e.preventDefault();
      let msg=document.getElementById('text');
      const d = new Date();
      const date=d.getDate()+"/"+eval(d.getMonth()+1)+"/"+d.getDate();
      if(msg.value.trim()){
         chatmsg.push({date:date,msg:msg})  
            let span=document.createElement('span')
            span.textContent=date;
            let li = document.createElement('li');
            li.textContent = date+" "+ msg.value;
        
        app.append(li);
      }else{
        window.alert("please Enter your msg")
      }


})