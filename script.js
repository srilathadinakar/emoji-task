// get elements 
const emojis = document.querySelector(".row")

// fetch api
const apiurl = fetch("https://emojihub.yurace.pro/api/all");
function Api(apiurl){
  return new Promise((resolve,reject)=>{
    
  apiurl
  .then((data) => data.json())
  
  .then((ele) => {
    //console.log(ele);
    for(let i=0;i<ele.length;i++){
      emojis.innerHTML +=`
      <div class ="col-12 col-md-4 col-sm-6 mb-2">
        <div class="card h-100 ">
        <div class="card-header">
        <h5 class="card-title">${ele[i].name}</h5>
        </div>
        <div class="card-body">
          <div class="card-img">${ele[i].htmlCode[0]}</div>
          <p class="card-text">Category : ${ele[i].category}</p>
          <p class="card-text">Group : ${ele[i].group}</p>
          <p class="card-text">Unicode : ${ele[i].unicode[0]}</p>
        </div>
        </div>
        </div>
        `
    }
  }) 
})
}
Api(apiurl)