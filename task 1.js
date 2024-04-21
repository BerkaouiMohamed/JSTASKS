function findMaxNumber(numbers) {
    let maxNumber = -Infinity; // Initialize maxNumber with negative value
    // Iterate through the array
    for (let i = 0; i < numbers.length; i++) {
        // Check if the current element is greater than the current maxNumber
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i]; // Update maxNumber if needed
        }
    }

    return maxNumber; // Return the maximum number found
}

// Test the function
const array1 = [3, 8, 2, 5, 10];
console.log("Maximum number in array1:", findMaxNumber(array1)); // Output: 10

const array2 = [-5, -2, -10, -3];
console.log("Maximum number in array2:", findMaxNumber(array2)); // Output: -2
