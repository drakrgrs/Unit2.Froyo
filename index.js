const userInputString = prompt(
  "Please enter a comma separated list of which froyo flavors you would like to order, without spaces.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
const stringArray = userInputString.split(",");
console.log(stringArray);

//[vanilla,vanilla,vanilla,strawberry,coffee,coffee]
// const flavorsObj = {};

// for (let i = 0; i < stringArray.length; i++) {
//   let flavName = stringArray[i];
//   if (flavorsObj[flavName]) {
//     flavorsObj[flavName]++;
//   } else {
//     flavorsObj[flavName] = 1;
//   }

function returnObj(arr) {
  const flavorsObj = {};

  for (let i = 0; i < arr.length; i++) {
    let flavName = arr[i];
    if (flavorsObj[flavName]) {
      flavorsObj[flavName]++;
    } else {
      flavorsObj[flavName] = 1;
    }
  }
  return flavorsObj;
}
console.table(returnObj(stringArray));
