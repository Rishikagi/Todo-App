let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");
let listcontainer = document.getElementsByClassName("listcontainer")[0];

btn.addEventListener("click",function(){
    if (input.value ==""){
        alert("Please Enter your Task");
    }
    else{
    let item = document.createElement("li") ;
    // let remove = document.createElement("button") ;
    item.innerText = input.value;
    // remove.innerText ="Delete";
    // remove.classList.add("rem");
    
    ul.appendChild(item);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
   item.appendChild(span);
    input.value="";
    savedata();
    }

});
ul.addEventListener("click",function(event){
    if(event.target.nodeName == "SPAN" ){
        let listof = event.target.parentElement;
        listof.remove();
        savedata();
       
    }
   
});



ul.addEventListener("click", function(event) {
  
   if (event.target.nodeName === "li") {
    console.log("click");
    event.target.toggle("Check");
    }
  });
  ul.addEventListener("click", function(event) {
    const li = event.target.closest("LI");
    if (li) {
      console.log("click");
      let els = this.querySelectorAll(".check");
      els.forEach(function(el) {
        el.classList.toggle("Check");
      });
    }
  });
  function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
    
  }
 
    function show() {
        const storedHtml = localStorage.getItem("data");
        if (storedHtml) {
          listcontainer.innerHTML = storedHtml;
        } else {
          listcontainer.innerHTML = "<p>No tasks yet!</p>"; 
        }
      }
    // listcontainer.innerHTML = localStorage.getItem("data");
  
  show();





    

