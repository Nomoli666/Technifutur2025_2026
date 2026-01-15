// createCardInDom(gameContainerNode, 'https://cdn2.thecatapi.com/images/MTc0MTc0Nw.gif', 'chat');

// let orderList = [0, 1, 2, 3, 4, 5, 6, 7];
// orderList.sort(() => 0.5 - Math.random());
// console.log(orderList);

//2. fetch les images
// async function getImages(limit) {
//     const response = await fetch(
//         `https://api.thecatapi.com/v1/images/search?limit=${limit}&api_key=live_4XH2S2ti0gDNGlJUQqHov0BNNVFbulZDYyBq6W7OWZWW6KhnLqY8fwEYsdRIlryq`
//     );
//     if (response.ok) {
//         const data = await response.json();

//         orderList = [];
//         for (let j = 0; j < 2; j++) {
//             for (let i = 0; i < data.length; i++) {
//                 orderList.push(data[i].url);
//             }
//         }
//         orderList.sort(() => 0.5 - Math.random());
//         for (let i = 0; i < orderList.length; i++) {
//             createCardInDom(gameContainerNode, orderList[i]);
//         }

//         const cardNode = document.querySelectorAll('.card');
//         console.log(cardNode);
//         for (let e of cardNode) {
//             e.addEventListener('click', () => {
//                 console.log(e.id);
//                 const classes = e.classList;
//                 const classChange = classes.toggle('stop');
//                 console.log(e.classList);
//             });
//         }
//     }
// }

//Events

//Initialisation