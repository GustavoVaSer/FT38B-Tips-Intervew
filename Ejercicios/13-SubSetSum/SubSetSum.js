//! NO MODIFICAR EL ARRAY QUE ESTOY RECORRIENDO!!!

function subsetSum(nums, target) {
  // Your code here:
  console.log(nums);
  console.log(target);

  const sums = new Set([0]); // [ 0 ] => [ 0, 1, 2, 3 ]

  for (const num of nums) {
    console.log(num);
    const sumsCopy = [...sums];
    for (const sum of sumsCopy) {
      const actualSum = num + sum;
      if (actualSum === target) return true;
      if (actualSum < target) sums.add(actualSum);
      console.log(sums);
    }
  }
  return false;
}
// Complejidad Temporal: O(2^n) => Exponencial

console.log(subsetSum([1, 2, 10, 5, 3], 9)); // true

// console.log(subsetSum([1, 2, 3, 4], 999)); // true
// n = 1 => 2^1 = 2
// n = 2 => 2^2 = 4
// n = 3 => 2^3 = 8
// n = 4 => 2^4 = 16 ===> 2^n

//! nums = [1,10,5,3], 9 ) true => 1 + 5 + 3 = 9
//          ↑
//! target = 9

//*  1 = 1

//* 10 = 10
//* 11 = 1 + 10

//*  5 = 5
//*  6 = 1 + 5
//* 15 = 10 + 5
//* 16 = 1 + 10 + 5

//*  3 = 3
//*  4 = 1 + 3
//* 13 = 10 + 3
//* 14 = 11 + 3
//*  8 = 5 + 3
//*  9 = 6 + 3 => === target => true
//* 18 = 10 + 5 + 3
//* 19 = 1 + 10 + 5 + 3

module.exports = subsetSum;
