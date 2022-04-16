// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//Is it always going to be integers? Are we going to be givern a speacial c
//characters? An empty arroy?

//R: Return a new arr with each value doubled
//E: if we are given [2,3,4], should return [4,6,8]
//  if we are given [4,5,6], should return [8,10,12]
// if we are given [2,22], should return [4,44]

//P:
//Make a function that take in aarry
function doubled(arr){
    return arr.map(element=>element*2)

}
doubled([1,2,3])
console.log(doubled([2,3,4]),[4,6,8])


//function double(arr){
    // return arr.map(function arrow(e){
    //     return e*2
    // }


//map throught the array and mutiply each element by2
//also return