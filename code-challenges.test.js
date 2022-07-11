// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("shuffle", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
        expect(shuffle(colors1)).toEqual(expect.arrayContaining(colors1));
        expect(shuffle(colors2)).toEqual(expect.arrayContaining(colors2))
    })
})

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


// b) Create the function that makes the test pass.

// Pseudo Code:
// Create a function expression that takes an array as a parameter. (shuffle)
// Have the function invoke the shift method, on the given parameter, to remove the first element from the array. 
// create a variable that invokes the sort method on the given parameter. (shufArray)
    // Within sort, include two parameters that will represent any two elements for comparison. The sort method will return a random number subtracted from 0.5. This will give a different value to each element index for each time the function is ran, changing the index value of each element in the array. 
// Have the function return the newly declared variable.
// Run the function using the given challenge parameters.

let shuffle = (array) => {
    array.shift(0);
    let shufArray = array.sort((a, b) => 0.5 - Math.random());
    return shufArray
}

console.log(shuffle(colors1))
console.log(shuffle(colors2))

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("minMax", () => {
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
        expect(minMax(nums1)).toEqual([-8, 90]);
        expect(minMax(nums2)).toEqual([5, 109])
    })
})

const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]


// b) Create the function that makes the test pass.

// Pseudo Code:
// Declare a function expression that takes in an array as a parameter. (minMax)
// Have the function invoke the sort method on the given parameter. 
    // Within sort, include two parameters that will represent any two elements for comparison. The second element will be subtracted from the first to determine which has a higher value. 
// Declare a variable the represents an empty array. (x)
// Declare a variable that represents the given parameter with the pop method invoked. (y)
// Invoke the push method on x to add the element at index 0 of the given parameter and the element represented by the variable y, to the variable x array. 
// Have the function return the x variable.
// Run the function using the given challenge parameters.

let minMax = (array) => {
    array.sort((a, b) => a - b)
    let x = []
    let y = array.pop()
    x.push(array[0], y)
    return x
}

// The test fails. I have yet to understand why, but am continuing to look into the issue. Any direction would also be appreciated!

console.log(minMax(nums1))
console.log(minMax(nums2))

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("noDitto", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
        expect(noDitto(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


// b) Create the function that makes the test pass.

// Pseudo Code:
// Declare a function expression that takes in two arrays as parameters. (noDitto)
// Declare a variable that represents the concat method being invoked on the first array, using the second array as a parameter. (z)
// Declare a for statement that will start at index 0, stop at the length of variable z and count up.
    // Within for, invoke the filter function on variable z that will take a given element and a given index value as parameters. The element at each index of variable z will be evaluated to check for strict equality to the given index value. Return the resulting elements. 
// Run the function using the given challenge parameters.

let noDitto = (array1, array2) => {
    z = array1.concat(array2)
    for(i = 0; i < z.length; i++) {
        return z.filter((x, y) => z.indexOf(x) === y)
    }
}

console.log(noDitto(testArray1, testArray2))