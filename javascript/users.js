var loginuser = JSON.parse(localStorage.getItem("loginusers"))
    ? JSON.parse(localStorage.getItem("loginusers"))
    : [];
//protected routing
function authenticate(){
  if(loginuser.length===0){
    alert('User is not logedin ')
    window.location.href="welcome.html"
  }
}
authenticate()  
//for logout
let logoutbtn=document.getElementById('logout')
logoutbtn.addEventListener('click', function () {
    localStorage.removeItem('loginusers');
  });

//manage users data
let user_records = JSON.parse(localStorage.getItem("registerusers"))
      ? JSON.parse(localStorage.getItem("registerusers"))
      : [];
console.log(user_records)

let table = `
<table class="table table-striped">
<thead class="theader">
  <tr>
    <th scope="col" class="column">Name</th>
    <th scope="col" class="column">User Email Id</th>
    <th scope="col"></th>
  </tr>

  
</thead>
<tbody >
  `;
user_records.map(({email,fullname,id})=>{
    table=table+`
    <td class="column">${fullname}</td>
    <td class="column">${email}</td>
    <td class="action">
      <p><a class="hyperlink" href="edit-user.html">Edit </a></p>
      <span>|</span>

      <!--Delete btn for prompt-->
      <button
        type="button"
        class="deletebtn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Delete
      </button>

      <!--Delete confirmation prompt box-->
      <div
        class="modal fade delete-container"
        id="exampleModal"
        tabindex="-1"
        style="
          width: 300px;
          align-items: center;
          display: flex;
          margin-left: 500px;
          margin-top: 200px;
        "
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" style="border: 2px solid black">
          <div class="modal-content">
            <div
              class="modal-header"
              style="border-bottom: 2px solid black"
            >
              <h5 class="modal-title" id="exampleModalLabel">
                Confirm File Deletion
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >x</button>
            </div>
            <div class="modal-body">
              <img
                src="../image/questionmarkicon.png"
                class="img"
              /><span>Are You Sure ?</span>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="propmt-button"
                data-bs-dismiss="modal"
                
              >
                Ok
              </button>
              <button type="button" class="propmt-button">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </td>
  </tr>`
    
})

table=table+` </tbody>
</table>`

let tabledata=document.getElementById('tablecontainer');
tabledata.innerHTML=table

// function deletion (userid){
//   console.log(userid)
//   let deletebtn=document.getElementById("okbtn")
//   console.log(deletebtn)
//   deletebtn.onclick=function(){
//     console.log('user...............')
//     debugger

//     user_records.map((user,index)=>{
//       console.log('user......')
//       console.log(user.id===userid,index)

//       if(user.id===userid){
//         user_records.splice(index,1)
//       }
//     })
//     localStorage.setItem("registerusers", JSON.stringify(user_records));
//     window.location.href="users.html"

//   }
 
// }