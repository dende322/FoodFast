/*HEADER*/

const btnToggleResponsive = document.querySelector(".btn-toggle");
const menuResponsive = document.querySelector(".menu-responsive");
const header = document.querySelector("header");

btnToggleResponsive.addEventListener("click", () => {
  const iconBars = document.querySelector(".fa-bars");
  const iconClose = document.querySelector(".fa-xmark");
  if (iconBars.classList.contains("active")) {
    iconBars.style.display = "none";
    iconClose.style.display = "block";
    iconBars.classList.remove("active");
    iconClose.classList.add("active");
    menuResponsive.classList.add("show");
    menuResponsive.style.top = `${header.clientHeight}px`;
  } else {
    iconClose.style.display = "none";
    iconBars.style.display = "block";
    iconClose.classList.remove("active");
    iconBars.classList.add("active");

    menuResponsive.classList.remove("show");
  }
});
