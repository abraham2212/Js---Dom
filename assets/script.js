

"use strict"

// let heads = document.getElementsByTagName("h1");

// for (const item of heads) {
    
//     console.log(item)
// }

// let elem = document.getElementById("header");


// let elem1=document.getElementsByClassName("header");
// let elem =document.querySelector("#header1");


let ul = document.querySelector("prducts ul");


btn.addEvenListener("click",function() {
   if(input.value ==""){
    alert("dont empty")
    return;
   }

  
   let items =document.querySelectorAll("li");

for (const item in items) {
    if (item.innerText==imput.value) {
        imput.value=="";
        alert("already exist")
         
        
    }
}


 let li =document.createElement("li");
  li.className=="list-group-item mt-2";
  li.innerText=input.value;
  ul.append(li);
  input.value="";

   


})







