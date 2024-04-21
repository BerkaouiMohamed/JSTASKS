// Inventory object to hold products
const inventory = {};

// Function to add a product to the inventory
function addProduct(name, price, stock) {
    if (inventory.hasOwnProperty(name)) {
        return false; // Product already exists
    }
    inventory[name] = { price, stock };
    return true; // Successfully added
}

// Function to update the stock quantity of a product
function updateStock(name, amount) {
    if (!inventory.hasOwnProperty(name)) {
        return false; // Product does not exist
    }
    inventory[name].stock += amount;
    return true; // Successfully updated
}

// Function to calculate the total inventory value
function calculateInventoryValue() {
    let totalValue = 0;
    for (const product in inventory) {
        totalValue += inventory[product].price * inventory[product].stock;
    }
    return totalValue; // Returns total inventory value
}

// Function to find the product with the highest stock
function getHighestStockProduct() {
    let highestStock = null;
    let maxStock = -1;
    for (const product in inventory) {
        if (inventory[product].stock > maxStock) {
            maxStock = inventory[product].stock;
            highestStock = product;
        }
    }
    return { product: highestStock, stock: maxStock }; // Returns product with highest stock
}

// Function to get a list of low-stock products
function getLowStockProducts(threshold) {
    const lowStockProducts = [];
    for (const product in inventory) {
        if (inventory[product].stock < threshold) {
            lowStockProducts.push({ name: product, stock: inventory[product].stock });
        }
    }
    return lowStockProducts; // Returns products with stock below the threshold
}

// Test cases
addProduct("Laptop", 1000, 10); // Returns true
addProduct("Phone", 500, 20); // Returns true
addProduct("Tablet", 300, 5); // Returns true
console.log("Adding duplicate product:", addProduct("Laptop", 1000, 10)); // Returns false

console.log("Total Inventory Value:", calculateInventoryValue()); // Output: 17500
console.log("Highest Stock Product:", getHighestStockProduct()); // Output: { product: "Phone", stock: 20 }

console.log("Updating stock for Laptop:", updateStock("Laptop", 5)); // Returns true
console.log("Updating stock for Unknown Product:", updateStock("Unknown", 10)); // Returns false

console.log("Total Inventory Value after update:", calculateInventoryValue()); // Output: 18500
console.log("Low-Stock Products:", getLowStockProducts(10)); // Output: [{ name: "Tablet", stock: 5 }]
