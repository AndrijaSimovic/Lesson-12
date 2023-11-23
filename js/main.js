import { welcomeText, workingTime, coffee } from "./constants.js"
import { elementGenerator, doAppendChild } from "./functions.js";

function main() {
    // welcomeText
    const welcomeTextElement = elementGenerator('h1');
    welcomeTextElement.innerText = welcomeText;
    welcomeTextElement.classList.add('marginLeft15');
    doAppendChild(root, welcomeTextElement);

    // workingTime
    const workingTimeElement = elementGenerator('h3');
    workingTimeElement.innerText = workingTime;
    workingTimeElement.classList.add('marginLeft15');
    doAppendChild(root, workingTimeElement);

    // #region coffeeList
    coffee.forEach((coffeeItem) => {

        const coffeeList = document.getElementById('list');
        coffeeList.classList.add('coffeeList', 'marginLeft5');

        const coffeeItemDiv = elementGenerator('li');
        coffeeItemDiv.classList.add('row');
        doAppendChild(coffeeList, coffeeItemDiv);

        const coffeeImage = elementGenerator('img');
        coffeeImage.src = coffeeItem.image;
        coffeeImage.classList.add('coffeeImage');
        doAppendChild(coffeeItemDiv, coffeeImage);

        const coffeeInfoDiv = elementGenerator('div');
        coffeeInfoDiv.classList.add('column', 'marginLeft15');
        doAppendChild(coffeeItemDiv, coffeeInfoDiv);

        const coffeeInfoDivTitle = elementGenerator('h3');
        coffeeInfoDivTitle.innerText = coffeeItem.title;
        doAppendChild(coffeeInfoDiv, coffeeInfoDivTitle)

        const coffeeInfoDivDescription = elementGenerator('p');
        coffeeInfoDivDescription.innerText = coffeeItem.description;
        doAppendChild(coffeeInfoDiv, coffeeInfoDivDescription);

        // ROAST - thing to do
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
elementGenerator();