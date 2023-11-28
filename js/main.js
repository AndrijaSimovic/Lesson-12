import { welcomeText, workingTime, coffee } from "./constants.js"
import { elementGenerator, doAppendChild, setInnerTextToAnElement, classList } from "./functions.js";

function main() {
    // welcomeText
    const welcomeTextElement = elementGenerator('h1');
    setInnerTextToAnElement(welcomeTextElement, welcomeText)
    classList(welcomeTextElement, 'marginLeft15');
    doAppendChild(root, welcomeTextElement);

    // workingTime
    const workingTimeElement = elementGenerator('h3');
    setInnerTextToAnElement(workingTimeElement, workingTime)
    classList(workingTimeElement, 'marginLeft15');
    doAppendChild(root, workingTimeElement);

    // #region coffeeList
    coffee.forEach((coffeeItem) => {

        const coffeeList = document.getElementById('list');
        classList(coffeeList, 'coffeeList', 'marginLeft5')
        const coffeeItemDiv = elementGenerator('li');

        classList(coffeeItemDiv, 'row');
        doAppendChild(coffeeList, coffeeItemDiv);

        const coffeeImage = elementGenerator('img');
        coffeeImage.src = coffeeItem.image;
        classList(coffeeImage, 'coffeeImage');
        doAppendChild(coffeeItemDiv, coffeeImage);

        const coffeeInfoDiv = elementGenerator('div');
        classList(coffeeInfoDiv, 'column', 'marginLeft15');
        doAppendChild(coffeeItemDiv, coffeeInfoDiv);

        const coffeeInfoDivTitle = elementGenerator('h3');
        setInnerTextToAnElement(coffeeInfoDivTitle, coffeeItem.title)
        doAppendChild(coffeeInfoDiv, coffeeInfoDivTitle)

        const coffeeInfoDivDescription = elementGenerator('p');
        setInnerTextToAnElement(coffeeInfoDivDescription, coffeeItem.description)
        doAppendChild(coffeeInfoDiv, coffeeInfoDivDescription);

        // ROAST - to be done
        // const index = coffeeItem.minRoastTypeValue;
        // while (index <= coffeeItem.maxRoastTypeValue) {
        //     const firstDiv = elementGenerator('div');
        //     coffeeInfoDiv.appendChild(firstDiv);
        //     firstDiv.classList.add('firstDiv');
        //     index ++;
        //     if (index <= coffeeItem.roastTypeValue) {
        //         firstDiv.class.add('');
        //     }
        //     index ++;
        // }
    })
    // #endregion
}

main();