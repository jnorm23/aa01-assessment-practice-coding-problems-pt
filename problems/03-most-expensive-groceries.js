/*
You are compiling a price checker for a grocery store. The grocery prices are as
follows:

  butter: $1,
  eggs: $2,
  milk: $3,
  bread: $4,
  cheese: $5

First, create a function called costOfGroceries(groceries) which takes a single
array of grocery items and returns the total cost.

Then, write a function mostExpensiveGroceries(groceriesList) that takes in a
2-dimensional array of grocery items and returns the index of the sub-array with
the highest cost.

Constraint: Use the costOfGroceries function as a helper function in the
mostExpensiveGroceries function to solve the problem.
*/

function costOfGroceries(groceries) {
  let totalCost = 0; // Initialize 'totalCost' to '0' 

  for (let i = 0; i < groceries.length; i++) { // Iterate thru each item in the (groceries) array using a for loop
  let item = groceries[i] // Initialize 'item' using predefined 'groceries' items ("butter", "eggs", "milk", "bread", "cheese")            

    if (item === "butter") { // Depending on the item found
        totalCost += 1;      // It increments 'totalCost' accordingly based on the prices provided
    } else if (item === "eggs") {
        totalCost += 2;
    } else if (item === "milk") {
        totalCost += 3;
    } else if (item === "bread") {
        totalCost += 4;
    } else if (item === "cheese") {
       totalCost += 5;
    }
  }

  return totalCost; // Return the 'totalCost' after all items have been processed
}

function mostExpensiveGroceries(groceriesList) {
  let maxCost = -1;  // Initialize 'maxCost' to '-1' 
  let maxIndex = -1; // and maxIndex to -1 
                     // to keep track of the maximum cost found and its corresponding index
  for (let i = 0; i < groceriesList.length; i++) { // Iterate thru each inner array in 'groceriesList' using a for loop
    let currentCost = costOfGroceries(groceriesList[i]); // Calculates the 'currentCost' using the 'costOfGroceries' function for each inner array
      if (currentCost > maxCost) { // If 'currentCost' is greater than 'maxCost'
        maxCost = currentCost; // It updates 'maxCost' and 'maxIndex' to the current values
        maxIndex = i; // Making sure it keeps track of the most expensive list
    }
  }

    return maxIndex; //returns 'maxIndex' the index of the most expensive list of groceries in 'groceriesList'
}


// const groceriesA = ['cheese', 'butter', 'eggs'];
// const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
// const groceriesC = ['cheese', 'bread'];
// const groceriesD = ['eggs', 'butter'];

// console.log(costOfGroceries(groceriesA)); // 8
// console.log(costOfGroceries(groceriesB)); // 13
// console.log(costOfGroceries(groceriesC)); // 9
// console.log(costOfGroceries(groceriesD)); // 3

// console.log(mostExpensiveGroceries(
//   [groceriesA, groceriesB, groceriesC, groceriesD]
// )); //=> 1
// console.log(mostExpensiveGroceries(
//   [groceriesA, groceriesD]
// )); //=> 0
// console.log(mostExpensiveGroceries(
//   [groceriesA, groceriesD, groceriesC]
// )); //=> 2


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  costOfGroceries,
  mostExpensiveGroceries,
};
