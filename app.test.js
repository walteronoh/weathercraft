function runRecursiveFunction(recursiveFunction) {
    const result = recursiveFunction(10);
    console.log(result);
}

const sum = (function sum(number) {
    if (number === 0) {
        return 0;
    }
    return number + sum(number - 1);
});
runRecursiveFunction(sum); // returns 55

const sumEven = (function sumEven(number) {
    if (number === 0) {
        return 0;
    } else if (number % 2 !== 0) {
        return sumEven(number - 1);
    }
    return number + sumEven(number - 1);
});
runRecursiveFunction(sumEven); // returns 30

const factorial = (function factorial(number) {
    if (number === 0) {
        return 1;
    }
    return number * factorial(number - 1);
});
runRecursiveFunction(factorial); // returns 120

const fibonacci = (function fibonacci(number) {
    if (number === 0) {
        return [0];
    } else if (number === 1) {
        return [0, 1];
    } else {
        const sequence = fibonacci(number - 1);
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
        return sequence;
    }
});
runRecursiveFunction(fibonacci); // returns [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const binarySearch = (function binarySearch(array, value, start, end) {
    if (start > end) {
        return -1;
    }
    const middle = Math.floor((start + end) / 2);
    if (array[middle] === value) {
        return middle;
    } else if (array[middle] > value) {
        return binarySearch(array, value, start, middle - 1);
    } else {
        return binarySearch(array, value, middle + 1, end);
    }
});
runRecursiveFunction(() => binarySearch([1, 3, 5, 7, 9], 5, 0, 4)); // returns 2
