//Description
//--------------------------------------------------------------------
//A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
// For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
// The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
// Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.

//*********
//This kata accepted my answer as correct, but had a timeout error and could not submit to codewars. I refactored the answer to the second solution.

//Solution 1
//--------------------------------------------------------------------
function dominator(arr) {
  let maxcount = 0
  let mostFrequent
  for (let i = 0; i < arr.length; i++) {
    let count = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) count++
    }
    if (count > maxcount) {
      maxcount = count
      mostFrequent = arr[i]
    }
  }
  if (maxcount > arr.length / 2) {
    return mostFrequent
  } else {
    return -1
  }
}

console.log(dominator([2, 4, 6, 1, 4, 5, 5, 5, 5, 5, 5, 5]))

//Solution 2
//---------------------------------------------------------------------

const dominator = (arr) => {
  const indexes = {}

  for (let i = 0; i < arr.length; i++) {
    indexes[arr[i]] = indexes[arr[i]] ? indexes[arr[i]] + 1 : 1
    if (indexes[arr[i]] > arr.length / 2) return arr[i]
  }
  return -1
}

//Solution 3
//----------------------------------------------------------------------
function dominator(arr) {
  arr.sort()
  for (let i = 0, v = 0, c = 0; i < arr.length; i++) {
    if (v == arr[i]) c++
    else {
      v = arr[i]
      c = 1
    }
    if (c > arr.length / 2) return v
  }
  return -1
}
