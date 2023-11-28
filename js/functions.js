function elementGenerator(elementName) {
    const newElement = document.createElement(elementName);
    return newElement;
}

function doAppendChild(parentElement, childElement) {
    parentElement.appendChild(childElement);
}

function setInnerTextToAnElement(element, text) {
    element.innerText = text;
}

function classList(element, classes) {
    element.classList.add(classes);
}

export { elementGenerator, doAppendChild, setInnerTextToAnElement, classList };