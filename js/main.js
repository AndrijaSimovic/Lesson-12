import { welcomeText, workingTime, coffee } from "./constants.js"
import { elementGenerator, doAppendChild } from "./functions.js";

function main() {
    // welcomeText
    const welcomeTextElement = elementGenerator('h1');
    welcomeTextElement.innerText = welcomeText;
    doAppendChild(root, welcomeTextElement);

    // workingTime
    const workingTimeElement = elementGenerator('h3');
    workingTimeElement.innerText = workingTime;

    // #region coffeeList
    coffee.forEach((coffeeItem) => {

        const coffeeList = document.getElementById('list');
        coffeeList.classList.add('coffeeList');

        const coffeeItemDiv = elementGenerator('li');
        coffeeItemDiv.classList.add('row');
        coffeeList.appendChild(coffeeItemDiv);

        const coffeeImage = elementGenerator('img');
        coffeeImage.src = coffeeItem.image;
        coffeeItemDiv.appendChild(coffeeImage);
        coffeeImage.classList.add('coffeeImage');

        const coffeeInfoDiv = elementGenerator('div');
        coffeeInfoDiv.classList.add('column');
        coffeeInfoDiv.classList.add('coffeeInfoDiv')
        coffeeItemDiv.appendChild(coffeeInfoDiv);

        const coffeeInfoDivTitle = elementGenerator('h3');
        coffeeInfoDivTitle.innerText = coffeeItem.title;
        coffeeInfoDiv.appendChild(coffeeInfoDivTitle);

        const coffeeInfoDivDescription = elementGenerator('p');
        coffeeInfoDivDescription.innerText = coffeeItem.description;
        coffeeInfoDiv.appendChild(coffeeInfoDivDescription);

        // roast
        const index = coffeeItem.minRoastTypeValue;
        while (index <= coffeeItem.maxRoastTypeValue) {
            const firstDiv = elementGenerator('div');
            coffeeInfoDiv.appendChild(firstDiv);
            firstDiv.classList.add('firstDiv');
            index ++;
            if (index <= coffeeItem.roastTypeValue) {
                firstDiv.class.add('');
            }
            index ++;
        }
    })
    // #endregion
}

main();
elementGenerator();