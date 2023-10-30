let arr = ['t', 'v', 'e', 'd', 'o', 'k', 'h', 'l', 'e', 'b', true, false];

let theSame = true;
for (let i = 1; i < arr.length; i++) {
    if (typeof(arr[i]) !== typeof(arr[0])) {
        theSame = false;
        break; 
    }
}
if (theSame) {
    console.log("Все элементы в массиве имеют одинаковый тип данных.");
} else {
    console.log("Не все элементы в массиве имеют одинаковый тип данных.");
}