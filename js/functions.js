function elementGenerator(elementName) {
    const newElement = document.createElement(elementName);
    return newElement;
}

// THIS IS HOW I TRIED TO DO IT BEFORE (I left this comment here so we can maybe talk about it later)
// function doAppendChild(parentElement, childElement) {
//     const parent = document.getElementById(parentElement);
//     const child = document.getElementById(childElement);
//     parent.appendChild(child);
// }

function doAppendChild(parentElement, childElement) {
    parentElement.appendChild(childElement);
}


export { elementGenerator, doAppendChild };