import { welcomeText, workingTime, coffee, coffeeMenu } from "./constants.js"
import { elementGenerator, doAppendChild, setInnerTextToAnElement, classList } from "./functions.js";

function main() {
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
    const coffeeMenuElement = elementGenerator('h3');
    setInnerTextToAnElement(coffeeMenuElement, coffeeMenu);
    doAppendChild(list, coffeeMenuElement);
    classList(coffeeMenuElement, 'coffeeMenu');


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

        const coffeeInfoDivTitle = elementGenerator('h3');
        setInnerTextToAnElement(coffeeInfoDivTitle, coffeeItem.title);
        doAppendChild(coffeeInfoDiv, coffeeInfoDivTitle);
        classList(coffeeInfoDivTitle, 'marginLeft15');

        const coffeeInfoDivDescription = elementGenerator('p');
        setInnerTextToAnElement(coffeeInfoDivDescription, coffeeItem.description);
        doAppendChild(coffeeInfoDiv, coffeeInfoDivDescription);
        classList(coffeeInfoDivDescription, 'marginLeft15');

        // roastType
        let index = coffeeItem.minRoastTypeValue;
        while (index <= coffeeItem.maxRoastTypeValue) {
            const roastedDiv = elementGenerator('div');
            classList(roastedDiv, 'roundDiv');
            if (index <= coffeeItem.roastTypeValue) {
                classList(roastedDiv, 'roundDivColored');
            }
            doAppendChild(coffeeInfoDiv, roastedDiv);
            classList(roastedDiv, 'marginLeft15');
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