//Description
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//Solution 1
//----------------------------------------------------
const grow = (x) => x.reduce((a, b) => a * b)

//Solution 2
//----------------------------------------------------
const grow = (nums) => nums.reduce((product, num) => product * num, 1)

//Solution 3
//----------------------------------------------------
function grow(x) {
  return x.reduce((a, b) => a * b, 1)
}
