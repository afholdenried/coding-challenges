// Description

// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

//---------------------------------------------------------------

// Solution 1
//---------------------------------------------------------------

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j]
      }
    }
  }
  return null
}

console.log(twoSum([1, 2, 3], 4))

// Solution 2
//---------------------------------------------------------------

function twoSum(nums, target) {
  const arr = []
  nums.map(function (x, ind1) {
    nums.map(function (y, ind2) {
      if (x + y == target && ind1 != ind2) arr.push(ind1, ind2)
    })
  })
  return [arr[0], arr[1]]
}

// Solution 3
//---------------------------------------------------------------

function twoSum(numbers, target) {
  let seen = new Map()
  for (let i = 0; i < numbers.length; i++) {
    let x = numbers[i],
      y = target - x
    if (seen.has(y)) return [seen.get(y), i]
    seen.set(x, i)
  }
}
