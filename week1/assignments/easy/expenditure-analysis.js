/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {

  const hashMap = new Map();
  const hashSet = new Set();
  const result = [];
  
  // using hashmaps to calculate total amount spent
  transactions.map(transaction => {
    if(hashMap.has(transaction.category)) {
      const prevValue = hashMap.get(transaction.category);
      hashMap.set(transaction.category, prevValue + transaction.price);
    }
    else {
      hashMap.set(transaction.category, transaction.price);
    }
  });

  // using hashmap to concat to result and using sets to concat unique ones only
  transactions.map(transaction => {
    const totalSpent = hashMap.get(transaction.category); 

    if(!hashSet.has(transaction.category)) {
      result.push({category: transaction.category, totalSpent});
      hashSet.add(transaction.category);
    }

  });

  return result;
}

module.exports = calculateTotalSpentByCategory;
