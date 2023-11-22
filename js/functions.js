function elementGenerator(elementName) {
    const newElement = document.createElement(elementName);
    return newElement;
}

elementGenerator();

export { elementGenerator };