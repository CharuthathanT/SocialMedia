fetch("http://127.0.0.1:5500/customerDetails_WithPost.json")
.then((res) => res.json())
.then((getdata) => {
  console.log(getdata);
  let status="Online"
  getdata.map((val) => {
     document.getElementById("tbody").innerHTML+= `<tr>
      <td><img src="${val.image_url}" width="50px" height="50px"/><span>${val.username}</span></td>
      <td><a href="#">${val.email}</a></td>
      <td>${status}</td>
      </tr>`
    });
    document.getElementById("nousers").innerHTML=getdata.length;
    document.getElementById("activeuser").innerHTML=0;
    document.getElementById("disactiveuser").innerHTML=getdata.length;
});
// document.getElementById("toggle").addEventListener("click",()=>{
//      let toggle=document.querySelector(".toggle");
//      let navigation=document.querySelector(".navigation");
//      let main=document.querySelector(".main");
//      toggle.classList.toggle("active")
//      navigation.classList.toggle("active")
//      main.classList.toggle("active")
// });

document.getElementById("search").addEventListener("change",()=>{
  fetch("http://127.0.0.1:5500/customerDetails_WithPost.json")
.then((res) => res.json())
.then((getdata) => {
  let output="";
  getdata.map((val) => {
    if(val.username==document.getElementById("search").value)
    {
      output+= `<tr>
      <td><img src="${val.image_url}" width="50px" height="50px"/><span>${val.username}</span></td>
      <td><a href="#">${val.email}</a></td>
      <td>Offline</td>
      </tr>`
    }     
    });
    document.getElementById("tbody").innerHTML=output;
  });
});
document.getElementById("view").addEventListener("click",()=>{  
  document.getElementById("search").value="";
  fetch("http://127.0.0.1:5500/customerDetails_WithPost.json")
.then((res) => res.json())
.then((getdata) => {
  let output="";
  getdata.map((val) => {
      output+= `<tr>
      <td><img src="${val.image_url}" width="50px" height="50px"/><span>${val.username}</span></td>
      <td><a href="#">${val.email}</a></td>
      <td>Offline</td>
      </tr>`
    });
    document.getElementById("tbody").innerHTML=output;
  })
});
