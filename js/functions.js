function elementGenerator(elementName) {
    const newElement = document.createElement(elementName);
    return newElement;
}

function doAppendChild(parentElement, childElement) {
    const parent = document.getElementById(parentElement);
    const child = document.getElementById(childElement);
    parent.appendChild(child);
}

export { elementGenerator, doAppendChild };