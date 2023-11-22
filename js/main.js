import { welcome_text, working_time, coffee } from "./constants.js"
import { elementGenerator } from "./functions.js";

function main() {
    const welcome_text = elementGenerator('h1');
    const root = document.getElementById('root');
    root.appendChild(welcome_text);

    coffee.forEach((coffeeItem) => {

        const coffeeList = document.getElementById('list');
        coffeeList.classList.add('coffeeList');

        const coffeeItemDiv = document.createElement('li');
        coffeeItemDiv.classList.add('row');
        coffeeList.appendChild(coffeeItemDiv);

        const coffeeImage = document.createElement('img');
        coffeeImage.src = coffeeItem.image;
        coffeeItemDiv.appendChild(coffeeImage);
        coffeeImage.classList.add('coffeeImage');

        const coffeeInfoDiv = document.createElement('div');
        coffeeInfoDiv.classList.add('column');
        coffeeInfoDiv.classList.add('coffeeInfoDiv')
        coffeeItemDiv.appendChild(coffeeInfoDiv);

        const coffeeInfoDivTitle = document.createElement('h3');
        coffeeInfoDivTitle.innerText = coffeeItem.title;
        coffeeInfoDiv.appendChild(coffeeInfoDivTitle);

        const coffeeInfoDivDescription = document.createElement('p');
        coffeeInfoDivDescription.innerText = coffeeItem.description;
        coffeeInfoDiv.appendChild(coffeeInfoDivDescription);
    })
}

main();

