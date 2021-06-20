export function generateAnHTMLElement(elementConfigurantion) {
  const fatherElement = document.createElement(
    elementConfigurantion.elementName
  );
  const fatherClass = elementConfigurantion.className
    ? elementConfigurantion.className
    : "";

  fatherElement.classList.add(fatherClass);

  elementConfigurantion.childs.map((child) => {
    const currentChild = document.createElement(child.elementName);
    const currentChildClass = child.className ? child.className : "";
    const currentChildTextContent = child.textContent ? child.textContent : "";

    if (child.isImage) {
      const avaiableAlternativeText = !!child.alt ? child.alt : "";

      currentChild.setAttribute("src", child.src);
      currentChild.setAttribute("alt", avaiableAlternativeText);
    }

    currentChild.classList.add(currentChildClass);
    currentChild.innerHTML = currentChildTextContent.toString().trim();

    fatherElement.appendChild(currentChild);
  });

  return fatherElement;
}
