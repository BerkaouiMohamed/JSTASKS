function groupByAge(people) {
    const ageGroups = {}; // Initialize the object to store age groups

    // Iterate over each person in the array
    for (let person of people) {
        const age = person.age; // Get the person's age
        const name = person.name; // Get the person's name
        
        // Check if the age already exists in the ageGroups object
        if (ageGroups[age]) {
            // If it does, add the person's name to the array
            ageGroups[age].push(name);
        } else {
            // If it doesn't, create a new array with the person's name
            ageGroups[age] = [name];
        }
    }

    return ageGroups; // Return the object that groups people by age
}

// Test the function
const people = [
    { name: 'zied', age: 25 },
    { name: 'yehia', age: 30 },
    { name: 'mohamed', age: 25 },
    { name: 'olfa', age: 30 },
    { name: 'fahmi', age: 35 }      
];
console.log(groupByAge(people)); 
