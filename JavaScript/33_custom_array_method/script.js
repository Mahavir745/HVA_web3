// forEachArray Function
function forEachArray(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

function forEachCallback(ele, index, arr) {
  console.log(ele, index, arr);
}

let arrForEach = [1, 2, 3, 4, 5, 6];
forEachArray(arrForEach, forEachCallback);

// mapArray Function
function mapArray(arr, callback) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let data = callback(arr[i], i, arr);
    output.push(data);
  }
  return output;
}

function mapCallback(ele, index, arr) {
  return ele * 2; // Example transformation
}

let arrMap = [1, 2, 3, 4, 5, 6];
let mapOutput = mapArray(arrMap, mapCallback);
console.log(mapOutput);

// filterArray Function
function filterArray(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

function filterCallback(ele, index, arr) {
  return ele > 18;
}

let arrFilter = [12, 23, 12, 32, 12, 13, 43];
let outputNewFilter = filterArray(arrFilter, filterCallback);
console.log(outputNewFilter);
