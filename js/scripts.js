
/*Variabili*/

const min = 1;
const max = 5;
const randomNumbers = [];
const numbersContainer = document.getElementById('number-container');
const initialTimer = 30;

for (let i = 0; i < 5; i++){
    const num = getRandomNumber(min, max);
    console.log('num', num, typeof num);

    randomNumbers.push(num);
    numbersContainer.innerHTML += `
        <span>
            ${num}
        </span>
    `;
}

console.log('randomNumbers', randomNumbers, typeof randomNumbers);

setTimeout(function (){
    console.log('Finish')
    numbersContainer.innerHTML = '';

    let guessedNumber = 0;
    for (i = 0; i < randomNumbers.length; i++){
        const userNumber = parseInt(prompt(`Inserisci il ${i + 1}° numero`));
        console.log('userNumber', userNumber, typeof userNumber);

        if (userNumber == randomNumbers[1]){
            guessedNumber++;
        }
    }

    alert(`Hai indovinato ${guessedNumber} numeri`);
}, initialTimer * 1000);



/*FUNZIONI*/

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}