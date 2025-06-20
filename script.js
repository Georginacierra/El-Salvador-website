window.addEventListener("scroll", () => {
  if (window.scrollY > 90) {
    navBar.classList.add("glassEffect");
  } else {
    navBar.classList.remove("glassEffect");
  }
});

const buttonP = document.querySelector("#printButton");
if (buttonP) {
  buttonP.addEventListener("click", () => {
    print();
  });
}

const burguerMenu = document.querySelector(".burguerMenu");
const closeButton = document.querySelector(".closeButton");
const menuMobile = document.querySelector("#menuMobile");

burguerMenu.addEventListener("click", () => {
  menuMobile.classList.remove("hideMenu");
});

closeButton.addEventListener("click", () => {
  menuMobile.classList.add("hideMenu");
});
// const menuButton = document.querySelector('#menuButton');

// const menu = document.querySelector('#menu');
// const exitButton = document.querySelector('#exitButton');

// menuButton.addEventListener('click', () => {
//   menu.classList.remove('hide');
// });

// exitButton.addEventListener('click', () => {
//   menu.classList.add('hide');
// });
// ```
