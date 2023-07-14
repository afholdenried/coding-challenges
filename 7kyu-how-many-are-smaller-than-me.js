//Description
// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]

//Solution 1
//-------------------------------------------------
function smaller(nums) {
  return nums.map((n, i) => {
    return nums.slice(i).filter((v) => v < n).length
  })
}

console.log(smaller([4, 3, 2, 1]))

//Solution 2
//--------------------------------------------------
const smaller = (nums) =>
  nums.map((x, i) => nums.slice(i).filter((y) => x > y).length)
