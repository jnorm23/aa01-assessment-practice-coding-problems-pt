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
  let totalCost = 0;

  for (let i = 0; i < groceries.length; i++) {
  let item = groceries[i]

    if (item === "butter") {
        totalCost += 1;
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

  return totalCost;
}

function mostExpensiveGroceries(groceriesList) {
  let maxCost = -1;
  let maxIndex = -1;

  for (let i = 0; i < groceriesList.length; i++) {
    let currentCost = costOfGroceries(groceriesList[i]);
      if (currentCost > maxCost) {
        maxCost = currentCost;
        maxIndex = i;
    }
  }

    return maxIndex;
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
