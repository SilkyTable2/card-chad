import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
document.body.style.backgroundColor="white";

document.querySelector('.cardbtn').addEventListener("click", (e) => {
  const card = document.getElementById("card");
  const copy = card.cloneNode(true);
  document.body.appendChild(copy);
})

document.querySelector('.backgroundbtn').addEventListener("click", (e) => {
  if (document.body.style.backgroundColor=="white"){
    document.body.style.backgroundColor="black";
  }
  else if (document.body.style.backgroundColor="black") {
    document.body.style.backgroundColor="white"
  }
})

document.querySelector('.deletebtn').addEventListener("click", (e) => {
  const deleter = document.getElementById("card");
  deleter.remove(deleter.lastElementChild);
  })

document.querySelector('.haxbtn').addEventListener("click", (e) => {
  var descRevealer = document.getElementById("descript");
  if (descRevealer.style.visibility === "hidden") {
    descRevealer.style.visibility = "visible";
  }
  else{
    descRevealer.style.visibility = "hidden";
  }
  })

document.querySelector('.headingchangebtn').addEventListener("click", (e) => {
  const headset = document.getElementById("head");
  headset.innerHTML = "something else";
  })