function countOccurrences(matrix, target) {
    let count = 0; // Initialize the count of occurrences

    // Iterate over each row in the matrix
    for (let i = 0; i < matrix.length; i++) {
        // Iterate over each element in the row
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === target) { // If the element matches the target
                count++; // Increment the count
            }
        }
    }

    return count; // Return the total count of occurrences
}

// Test the function
const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 3],
    [8, 3, 10, 3]
];
console.log(countOccurrences(matrix, 3)); // Output: 4
console.log(countOccurrences(matrix, 10)); // Output: 1
