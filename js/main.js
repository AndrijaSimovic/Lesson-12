import { welcomeText, workingTime, coffee, coffeeMenu } from "./constants.js"
import { elementGenerator, doAppendChild, setInnerTextToAnElement, classList } from "./functions.js";

function main() {
    let coffees = [...coffee]; // Kopija

    // Coffee title icon
    const coffeeTitleIcon = elementGenerator('img');
    coffeeTitleIcon.src = "https://www.iconarchive.com/download/i134299/iconarchive/fat-sugar-food/Drink-Coffee.1024.png";
    doAppendChild(root, coffeeTitleIcon);
    classList(coffeeTitleIcon, 'coffeeTitleIconClass');
    classList(root, 'row');
    const rootChild = elementGenerator('div')
    doAppendChild(root, rootChild);

    // welcomeText
    const welcomeTextElement = elementGenerator('h1');
    setInnerTextToAnElement(welcomeTextElement, welcomeText);
    classList(welcomeTextElement, 'marginLeft15');
    doAppendChild(rootChild, welcomeTextElement);

    // workingTime
    const workingTimeElement = elementGenerator('h3');
    setInnerTextToAnElement(workingTimeElement, workingTime);
    classList(workingTimeElement, 'marginLeft25');
    doAppendChild(rootChild, workingTimeElement);

    // coffeeMenu
    const coffeeMenuElement = elementGenerator('h4');
    setInnerTextToAnElement(coffeeMenuElement, coffeeMenu);
    doAppendChild(rootChild, coffeeMenuElement);
    classList(coffeeMenuElement, 'coffeeMenu');

    // search
    const searchElement = document.getElementById('search');
    classList(searchElement, 'search');
    searchElement.setAttribute('placeholder', 'Search coffee...');

    searchElement.addEventListener('input', (event) => {
        const { target: { value } } = event;
        if (value === "") {
            coffees = [...coffee];
        } else if (value !== "") {
            coffees = coffee.filter((c) => c.title.toLowerCase().includes(value.toLowerCase()));
        }
    });

    // #region coffeeList
    coffee.forEach((coffeeItem) => {

        const coffeeList = document.getElementById('list');
        classList(coffeeList, 'coffeeList');
        const coffeeItemDiv = elementGenerator('li');

        classList(coffeeItemDiv, 'row');
        doAppendChild(coffeeList, coffeeItemDiv);

        const coffeeImage = elementGenerator('img');
        coffeeImage.src = coffeeItem.image;
        classList(coffeeImage, 'coffeeImage');
        doAppendChild(coffeeItemDiv, coffeeImage);

        const coffeeInfoDiv = elementGenerator('div');
        classList(coffeeInfoDiv, 'column', 'marginLeft15'); // I dont know why the second class doesn't work.
        doAppendChild(coffeeItemDiv, coffeeInfoDiv);

        const coffeeInfoDivTitle = elementGenerator('h2');
        setInnerTextToAnElement(coffeeInfoDivTitle, coffeeItem.title);
        doAppendChild(coffeeInfoDiv, coffeeInfoDivTitle);
        classList(coffeeInfoDivTitle, 'marginLeft15');

        const coffeeInfoDivDescription = elementGenerator('h4');
        setInnerTextToAnElement(coffeeInfoDivDescription, coffeeItem.description);
        doAppendChild(coffeeInfoDiv, coffeeInfoDivDescription);
        classList(coffeeInfoDivDescription, 'marginLeft15');

        const roastTypeElement = elementGenerator('h5');
        setInnerTextToAnElement(roastTypeElement, coffeeItem.roastType);
        doAppendChild(coffeeInfoDivDescription, roastTypeElement);
        classList(roastTypeElement, 'row');

        // roastType
        let index = coffeeItem.minRoastTypeValue;
        while (index <= coffeeItem.maxRoastTypeValue) {
            const roastedSpan = elementGenerator('span');
            classList(roastedSpan, 'roundDiv');
            if (index <= coffeeItem.roastTypeValue) {
                classList(roastedSpan, 'roundDivColored');
            }
            doAppendChild(roastTypeElement, roastedSpan);
            classList(roastedSpan, 'marginLeft5');
            index++;
        }
    })
    // #endregion

    // plantageLink
    const plantageLink = elementGenerator('a');
    const link = document.createTextNode('Click here to see where our coffee comes from.'); // I dont know how to make the "here" word to be the only one that you can click on.
    doAppendChild(plantageLink, link);
    plantageLink.href = 'https://files.worldwildlife.org/wwfcmsprod/images/Ellen_Fontana_Coffee_Farm_Atlantic_Forests/story_full_width/5byrf3t8a6_Small_WW2151969.jpg';
    plantageLink.setAttribute('target', '_blank');
    doAppendChild(mainDiv, plantageLink);
    classList(plantageLink, 'link');
}

main();