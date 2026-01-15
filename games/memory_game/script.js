//1. Creation de cartes
const gameContainerNode = document.querySelector('.game-container');
function createCardInDom(container, imageUrl) {
    const cardNode = document.createElement('article');
    cardNode.classList.add('card');
    cardNode.id = imageUrl;

    const flipCardFront = document.createElement('div');
    flipCardFront.classList.add('card-side');
    flipCardFront.classList.add('front');
    const cardFrontImg = document.createElement('img');
    cardFrontImg.src = './images/card_back.png';
    cardFrontImg.alt = 'Geometric pattern';

    const flipCardBack = document.createElement('div');
    flipCardBack.classList.add('card-side');
    flipCardBack.classList.add('back');
    const cardBackImg = document.createElement('img');
    cardBackImg.src = imageUrl;
    cardBackImg.alt = `image de chat`;

    //passer les img dans les cartes
    flipCardFront.appendChild(cardFrontImg);
    flipCardBack.appendChild(cardBackImg);
    //passer les cartes dans cardInner
    cardNode.appendChild(flipCardFront);
    cardNode.appendChild(flipCardBack);
    //passer le cardInner dans l'article
    //passer dans le container
    container.appendChild(cardNode);
}

function displayResultMessage(container) {
    const wonMessage = document.createElement('h3');
    wonMessage.classList.add('result-message');
    wonMessage.textContent = 'Congratulation !!!';
    container.appendChild(wonMessage);
}

//2.Images du jeu
images = [
    'images/cat1.jpg',
    'images/cat2.jpg',
    'images/cat3.jpg',
    'images/cat4.jpg',
    'images/cat5.jpg',
    'images/cat6.jpg',
    // 'images/cat7.jpg',
    // 'images/cat8.jpg',
];

//3.fonction de jeu
function newGame(list) {
    gameContainerNode.innerHTML = '';

    //3.a avoir les images en ordre aléatoire
    orderList = [];
    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < list.length; i++) {
            orderList.push(list[i]);
        }
    }
    orderList.sort(() => 0.5 - Math.random());
    for (let i = 0; i < orderList.length; i++) {
        createCardInDom(gameContainerNode, orderList[i]);
    }

    const foundPairs = [];
    //3.b stopper les rotations quand on clique sur l'image
    const cardNode = document.querySelectorAll('.card');
    for (let e of cardNode) {
        e.addEventListener('click', () => {
            const classes = e.classList;
            const classChange = classes.toggle('stop');

            let selectedCards = document.querySelectorAll('.stop');

            if (selectedCards.length == 2) {
                if (selectedCards[0].id == selectedCards[1].id) {
                    setTimeout(() => {
                        selectedCards[0].classList.toggle('win');
                        selectedCards[1].classList.toggle('win');
                    }, '800');
                    setTimeout(() => {
                        selectedCards[0].classList.remove('stop');
                        selectedCards[1].classList.remove('stop');
                    }, '800');
                    foundPairs.push(selectedCards[0].id);
                    foundPairs.push(selectedCards[1].id);
                    console.log(foundPairs);
                } else {
                    setTimeout(() => {
                        selectedCards[0].classList.remove('stop');
                        selectedCards[1].classList.remove('stop');
                    }, '1000');
                }
            }
            if (foundPairs.length == orderList.length) {
                setTimeout(() => {
                    displayResultMessage(gameContainerNode);
                }, '800');
            }
        });
    }
}

const newGameBtn = document.getElementById('new-game-btn');
newGameBtn.addEventListener('click', () => {
    newGame(images);
});
