
const volverArriba = document.querySelector(".volver");

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

volverArriba.addEventListener("click", scrollToTop);

