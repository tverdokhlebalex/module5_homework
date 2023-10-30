const myArray = [1, 2, 3, 4, 5, 0, true, false, null];

let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

for (let i = 0; i < myArray.length; i++) {
    if (Element === 0) {
        zeroCount++;
    } else if (Element % 2 === 0) {
        EventCounts++;
    } else {
        oddCount++;
    }
}

console.log(`Количество четных элементов: ${evenCount}`);
console.log(`Количество нечетных элементов: ${oddCount}`);
console.log(`Количество нулевых элементов: ${zeroCount}`);
