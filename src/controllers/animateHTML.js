const burgerMenu = document.querySelector(".menu");
const menu = document.querySelector(".menu-opened");

function toggleClassNameByElement(elements, classNames) {
  elements.forEach((element, index) => {
    element.classList.toggle(classNames[index]);
  });
}

burgerMenu.addEventListener("click", () => {
  toggleClassNameByElement([menu, burgerMenu], ["hidden", "close"]);
});
