//Description
// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

//Solution 1
//--------------------------------------------------------
const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0
  }
  return begin + sequenceSum(begin + step, end, step)
}

//Solution 2
//-----------------------------------------------------
function sequenceSum(begin, end, step) {
  let sum = 0
  for (let i = begin; i <= end; i += step) {
    sum += i
  }
  return sum
}

//Solution 3
//----------------------------------------------------
const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0

  let sum = 0
  for (let i = begin; i <= end; i += step) {
    sum += i
  }
  return sum
}
