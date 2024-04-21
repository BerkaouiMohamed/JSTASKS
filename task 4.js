function sumOfDiagonals(matrix) {
    const size = matrix.length; // Get the size of the matrix
    let mainDiagonalSum = 0; // Initialize sum of main diagonal
    let secondaryDiagonalSum = 0; // Initialize sum of secondary diagonal

    // Iterate over each row of the matrix
    for (let i = 0; i < size; i++) {
        // Add value at current row and column index to main diagonal sum
        mainDiagonalSum += matrix[i][i];
        // Add value at current row and column index to secondary diagonal sum
        secondaryDiagonalSum += matrix[i][size - 1 - i];
    }

    // Return an object containing the sums of both diagonals
    return {
        mainDiagonalSum,
        secondaryDiagonalSum
    };
}

// Test the function
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(sumOfDiagonals(matrix)); // Output: { mainDiagonalSum: 15, secondaryDiagonalSum: 15 }
