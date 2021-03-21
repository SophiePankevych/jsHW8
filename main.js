// console.log('start');
// let clock = document.getElementById('clock');
// setInterval(() => {
//     let date = new Date();
//     clock.innerText = date.getHours() + 'h ' + date.getMinutes() + 'min ' + date.getSeconds() + 'sec ';
// }, 1000);
// console.log('end');
// setTimeout(() => {
//     let date = new Date();
//     console.log(date.getHours() + 'h ' + date.getMinutes() + 'min ' + date.getSeconds() + 'sec ');
// }, 2000);

let userBlock = document.getElementById('clock');
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => {
//         for (const user of users) {
//             let item = document.createElement('p');
//             item.innerText = `${user.name} - ${user.email}`;
//             userBlock.appendChild(item)
//         }
//     });
let futuramaCharacters = [];

let futurama = 'https://api.sampleapis.com/futurama/characters';
fetch(futurama)
    .then(repsonse => repsonse.json())
    .then(heroes => {
        futuramaCharacters = heroes;
        for (const hero of heroes) {
            let info = document.createElement("p");
            let anchor = document.createElement('a');
            anchor.href = `characterDetails.html?name=${hero.name.first}&surname=${hero.name.last}&full=${JSON.stringify(hero)}`;
            anchor.innerText = `${hero.name.first} ${hero.name.last}`;
            info.innerText = `${hero.sayings[0]}`;
            let img = document.createElement('img');
            img.src = `${hero.images.main}`;
            img.alt = 'hero photo';
            userBlock.appendChild(anchor);
            userBlock.appendChild(img);
            userBlock.appendChild(info);
        }
    });
console.log(futuramaCharacters);
setTimeout(() => console.log(futuramaCharacters), 2000);

