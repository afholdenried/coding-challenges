//Description
// Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

// Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

// Examples
// [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
// [0, 1, 2, 3, 4, 5]                ==>  []
//-----------------------------------------------------------

//Solution 1
//-----------------------------------------------------------
function duplicates(arr) {
  let duplicateItems = arr.filter((item, index) => arr.indexOf(item) !== index)

  return duplicateItems.filter(
    (item, index) => duplicateItems.indexOf(item) === index
  )
}
console.log(duplicates([1, 2, 3, 4, 5]))

//Solution 2
//-----------------------------------------------------------
function duplicates(x) {
  let v = x.filter((t, i) => x.indexOf(t) !== i)
  return v.filter((t, i) => v.indexOf(t) === i)
}

//Solution 3
//-----------------------------------------------------------
function duplicates(arr) {
  return arr.reduce(function (prev, cur, i, a) {
    if (i !== a.indexOf(cur) && prev.indexOf(cur) === -1) {
      prev.push(cur)
    }
    return prev
  }, [])
}

//Solution 4
//-----------------------------------------------------------
const duplicates = (arr) => {
  let map = new Map()
  let set = new Set()
  arr.forEach((e) => {
    map.get(e) ? set.add(e) : map.set(e, true)
  })
  return Array.from(set)
}

//Solution 5
//-----------------------------------------------------------
function duplicates(array) {
  var result = [],
    counts = new Map()
  array.forEach(function (x) {
    var c = (counts.get(x) || 0) + 1
    if (c === 2) result.push(x)
    counts.set(x, c)
  })
  return result
}
