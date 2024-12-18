const first = [1,2,3]
const second = [4,5,6]

const combined = ["1st: ", ...first, "2nd: ", ...second]
console.log(combined)

// -------------------------------------------------
// On Objects:

const firstObject = {name: 'Mani'};
const secondObject = {job: 'Developer'}

const combineObjects = {...firstObject, ...secondObject}
console.log(combineObjects)