window.addEventListener("scroll", () => {
  if (window.scrollY > 90) {
    navBar.classList.add("glassEffect");
  } else {
    navBar.classList.remove("glassEffect");
  }
});

const buttonP = document.querySelector("#printButton");
buttonP.addEventListener("click", () => {
  print();
});
