//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".patika img");
const purchase = document.querySelector(".poruci");
const description = document.querySelector(".info h3");
const description2 = document.querySelector(".info h2");
const sizes = document.querySelector(".velicine");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(85px)";
  sneaker.style.transform = "translateZ(90px) rotateZ(-45deg)";
  description.style.transform = "translateZ(80px)";
  sizes.style.transform = "translateZ(75px)";
  purchase.style.transform = "translateZ(70px)";
  description2.style.transform = "translateZ(80px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
  description2.style.transform = "translateZ(0px)";
});
