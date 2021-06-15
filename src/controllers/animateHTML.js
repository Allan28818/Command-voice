const burgerMenu = document.querySelector(".menu");
const menu = document.querySelector(".menu-opened");
const cleanStorage = document.querySelector(".clean-storage");
const deletePopUp = document.querySelector(".confirm-delete ");
const cancelButton = document.querySelector(".card>ul>li>.cancel");
const backgroundDeletePopUp = document.querySelector(".confirm-delete");

export function toggleClassNameByElement(elements, classNames, remove = false) {
  elements.forEach((element, index) => {
    if (remove) {
      element.classList.remove(classNames[index]);
    }
    return element.classList.toggle(classNames[index]);
  });
}

burgerMenu.addEventListener("click", () => {
  toggleClassNameByElement([menu, burgerMenu], ["hidden", "close"]);
});

cleanStorage.addEventListener("click", () => {
  toggleClassNameByElement([deletePopUp], ["hidden"]);
});

cancelButton.addEventListener("click", () => {
  toggleClassNameByElement([deletePopUp], ["hidden"], true);
});

backgroundDeletePopUp.addEventListener("click", () => {
  toggleClassNameByElement([deletePopUp], ["hidden"], true);
});
