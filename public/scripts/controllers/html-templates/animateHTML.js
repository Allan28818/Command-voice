const burgerMenu = document.querySelector(".menu");
const menu = document.querySelector(".menu-opened");
const cleanStorage = document.querySelector(".clean-storage");
const deletePopUp = document.querySelector(".confirm-delete ");
const cancelButton = document.querySelector(".card>ul>li>.cancel");
const backgroundDeletePopUp = document.querySelector(".confirm-delete");
const safeAreaToClick = document.querySelector(".confirm-delete>.card");
const html = document.querySelector("html");

export function toggleClassNameByElement(elements, classNames, remove = false) {
  elements.forEach((element, index) => {
    if (remove) {
      element.classList.remove(classNames[index]);
    }
    return element.classList.toggle(classNames[index]);
  });
}

html.addEventListener("click", (event) => removeMenuClasses(event));

burgerMenu.addEventListener("click", () => {
  toggleClassNameByElement([menu, burgerMenu], ["hidden", "close"]);
});

cleanStorage.addEventListener("click", () => {
  toggleClassNameByElement([deletePopUp], ["hidden"]);
});

cancelButton.addEventListener("click", () => {
  toggleClassNameByElement([deletePopUp], ["hidden"], true);
});

backgroundDeletePopUp.addEventListener("click", (event) => {
  if (!safeAreaToClick.contains(event.target)) {
    toggleClassNameByElement([deletePopUp], ["hidden"], true);
    return;
  }
});

function removeMenuClasses(event) {
  const doNotHaveClassHidden = !menu.classList.contains("hidden");
  const doNotHaveCurrentTarget = !menu.contains(event.target);
  const isNotBurgerTarget = !burgerMenu.contains(event.target);

  if (doNotHaveClassHidden && doNotHaveCurrentTarget && isNotBurgerTarget) {
    toggleClassNameByElement([menu, burgerMenu], ["hidden", "close"], false);
  }
}
