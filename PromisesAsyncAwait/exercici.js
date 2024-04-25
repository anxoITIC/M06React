//EXERCICI 1
function esDivisible(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve(`${number} és divisible per dos.`);
        } else {
            reject(`${number} no és divisible per dos.`);
        }
    });
}

esDivisible(10)
    .then(result => console.log(result))
    .catch(error => console.error(error));

//EXERCICI 2
const checkNumero = (value) => {
    return new Promise((resolve, reject) => {
        if (value >= 0 && value <= 10) {
            resolve(`${value} és major o igual a 0 i menor o igual a 10.`);
        } else {
            reject(`${value} no és major o igual a 0 i menor o igual a 10.`);
        }
    });
};

const number = 5;
checkNumero(number)
    .then(result => console.log(result))
    .catch(error => console.error(error));


//EXERCICI 3
function esVocal(letter) {
    const vowels = ["a", "e", "i", "o", "u"];
    return new Promise((resolve, reject) => {
        if (vowels.includes(letter)) {
            resolve(`${letter} és una vocal.`);
        } else {
            reject(`${letter} no és una vocal.`);
        }
    });
}

esVocal("e")
    .then(result => console.log(result))
    .catch(error => console.error(error));


//EXERCICI 4
function divideix(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num2 !== 0) {
            resolve(num1 / num2);
        } else {
            reject("No es pot dividir per zero.");
        }
    });
}

divideix(10, 2)
    .then(result => console.log("Quocient:", result))
    .catch(error => console.error(error));
