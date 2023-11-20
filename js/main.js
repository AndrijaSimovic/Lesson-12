const coffee = [
    {
        id: 1,
        title: 'Turkish coffee',
        description: 'Turkish coffee in a serbian way',
        image: 'https://adriatictraveller.eu/wp-content/uploads/2022/12/Istanbul_turk-kahvesi_-turkish-coffee-scaled-859x639.jpeg'
    },
    {
        id: 2,
        title: 'Nescafe',
        description: 'Coffee with milk',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmi4qwllX-NMuIoWtoOu_nnNs4u4_3DVfpOg&usqp=CAU'
    },
    {
        id: 3,
        title: 'Espresso',
        description: 'Coffee with or without sugar and milk',
        image: 'https://www.thespruceeats.com/thmb/DIUuY3Fj_51rINr-vN4KQD2Js24=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/what-is-espresso-765702-hero-03_cropped-ffbc0c7cf45a46ff846843040c8f370c.jpg'
    },
    {
        id: 4,
        title: 'Cappuccino',
        description: 'Coffee with steamed milk and foam',
        image: 'https://methodicalcoffee.com/cdn/shop/articles/cap.jpg?v=1684507364&width=700'
    }
]

function main() {
    // Welcoming message
    const root = document.getElementById('root');
    const welcomingMessage = document.createElement('h1');
    welcomingMessage.innerText = 'Welcome to our coffee shop';
    welcomingMessage.classList.add('text');
    root.appendChild(welcomingMessage);

    // Working time
    const workingTime = document.createElement('h3');
    workingTime.innerText = 'We are open 24/7';
    root.appendChild(workingTime);
    workingTime.classList.add('text');


    coffee.forEach((coffeeItem) => {
        const coffeeList = document.getElementById('root');
        coffeeList.classList.add('coffeeList')

        const coffeeItemDiv = document.createElement('div');
        coffeeItemDiv.classList.add('row');
        coffeeList.appendChild(coffeeItemDiv);

        const images = document.createElement('img');
        images.src = coffeeItem.image;
        coffeeItemDiv.appendChild(images);
        images.style.width = '200px';
        images.style.height = '150px';

        const coffeeInfoDiv = document.createElement('h4');
        coffeeInfoDiv.classList.add('column');
        coffeeInfoDiv.style.marginLeft = '15px';
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
