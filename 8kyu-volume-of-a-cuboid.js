//Description
// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

//Solution 1
//-----------------------------------------------------------
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}

//Solution 2
//-----------------------------------------------------------
const Kata = {
  getVolumeOfCuboid: (length, width, height) => length * width * height,
}
