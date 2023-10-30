const userInput = prompt("Введите значение");

const numberValue = +userInput;

if (!isNaN(numberValue) && typeof numberValue === 'number' && isFinite(numberValue)) {
    if (numberValue % 2 === 0) {
        console.log("Введите четное число");
    } else {
        console.log("Введите нечетное число");
    }
} else {
    console.log("Упс, кажется, вы ошиблись");

}