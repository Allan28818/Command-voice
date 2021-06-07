export function generateAnHTMLElement(elementConfigurantion) {
  const fatherElement = document.createElement(
    elementConfigurantion.elementName
  );
  const fatherClass = elementConfigurantion.className
    ? elementConfigurantion.className
    : "";

  fatherElement.classList.add(fatherClass);

  elementConfigurantion.childs.map((child) => {
    const currentChild = document.createElement(child.className);
    const currentChildClass = child.className ? child.className : "";
    const currentChildTextContent = child.textContent ? child.textContent : "";

    currentChild.classList.add(currentChildClass);
    currentChild.innerHTML = currentChildTextContent.toString().trim();

    fatherElement.appendChild(currentChild);
  });

  return fatherElement;
}
