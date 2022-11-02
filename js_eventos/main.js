// var funcionBeep = () => {
//   document.body.insertAdjacentHTML("beforeend", "<p>BEEP</p>");
//   document.body.classList.toggle("color");
// };

// document.querySelector("button").addEventListener("click", funcionBeep);

// document.querySelectorAll("p").forEach( (p) => {
//   p.addEventListener("click", () => {
//     if (p.classList.contains("resaltado")) {
//       p.classList.remove("resaltado")
//     } else {
//       p.classList.add("resaltado")
//     }
//   })
// });

// var money_img = document.querySelector(".money_img");
// var miami_img = document.querySelector(".miami_img");
// var ricky_img = document.querySelector(".ricky_img");

// document.querySelector(".ricky-money").addEventListener("click", () => {
//   money_img.classList.remove("oculto");
// });

// document.querySelector(".ricky-miami").addEventListener("click", () => {
//   miami_img.classList.remove("oculto");
// });

// document.querySelector(".ricky-commander").addEventListener("click", () => {
//   ricky_img.classList.remove("oculto");
// })

// document.querySelectorAll("img").forEach( (img) => {
//     img.addEventListener("click", () => {
//      img.classList.add("oculto")
//     })
//   }
// )
// var magic_img = document.querySelector(".magic_img")

// document.querySelector("#magic").addEventListener("mouseover", () => {
//   magic_img.classList.add("oculto")
// });

// document.querySelector("#magic").addEventListener("mouseover", () => {
//   magic_img.classList.add("mostrar")
// });

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})