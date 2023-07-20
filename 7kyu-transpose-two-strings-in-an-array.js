// Description
// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

// e.g. transposeTwoStrings(['Hello','World']);

// should return

// H W
// e o
// l r
// l l
// o d
// A few things to note:

// There should be one space in between the two characters
// You don't have to modify the case (i.e. no need to change to upper or lower)
// If one string is longer than the other, there should be a space where the character would be

//Solution 1
//-----------------------------------------------------------------
const transposeTwoStrings = ([s1, s2]) =>
  [...(s1 + " ".repeat(Math.max(0, s2.length - s1.length)))]
    .reduce((a, b, i) => a.concat(b + " " + (s2[i] || " ")), [])
    .join("\n")

//Solution 2
//-------------------------------------------------------------------
function transposeTwoStrings(arr) {
  let max = Math.max(arr[0].length, arr[1].length)
  let newArr = []
  for (var i = 0; i < max; i++) {
    newArr.push(`${arr[0][i] || " "} ${arr[1][i] || " "}`)
  }
  return newArr.join("\n")
}

//Solution 3
//-----------------------------------------------------------------

function transposeTwoStrings(arr) {
  const resArr = []
  const maxString = arr[0].length >= arr[1].length ? arr[0] : arr[1]
  let minString = ""
  let i = 0
  while (i < maxString.length) {
    if (arr[0] === maxString) {
      arr[1][i] ? (minString += arr[1][i]) : (minString += " ")
      resArr.push(
        `${maxString[i]} ${minString[i]}${
          i === maxString.length - 1 ? "" : "\n"
        }`
      )
    } else {
      !arr[0][i] ? (minString += " ") : (minString += arr[0][i])
      resArr.push(
        `${minString[i]} ${maxString[i]}${
          i === maxString.length - 1 ? "" : "\n"
        }`
      )
    }
    i++
  }
  return resArr.join("")
}

console.log(transposeTwoStrings(["Hello, World"]))

//Solution 4
//----------------------------------------------------------
function transposeTwoStrings(arr) {
  var s1 = arr[0],
    s2 = arr[1],
    l = Math.max(s1.length, s2.length),
    r = []
  for (var i = 0; i < l; ++i) {
    r.push((s1[i] || " ") + " " + (s2[i] || " "))
  }
  return r.join("\n")
}
