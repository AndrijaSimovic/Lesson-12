import { welcomeText, workingTime, coffee } from "./constants.js"
import { elementGenerator } from "./functions.js";

function main() {
    // welcomeText
    const welcomeTextElement = elementGenerator('h1');
    welcomeTextElement.innerText = welcomeText;
    const root = document.getElementById('root');
    root.appendChild(welcomeTextElement);

    // workingTime
    const workingTimeElement = elementGenerator('h3');
    workingTimeElement.innerText = workingTime;
    root.appendChild(workingTimeElement);

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
    })
    // #endregion
}

main();

