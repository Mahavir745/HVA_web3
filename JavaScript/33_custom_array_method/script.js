//todo: forEachArray Function:

// function forEachone (arr, callback){
//   for(let i=0; i<arr.length; i+=1){
//     callback(arr[i],i,arr)
//   }
// }

// function forEachcall(ele,index,arr){
//   console.log(ele, index, arr );
  
// }

// let arr = [1,2,3,4,5,6]

// forEachone(arr,forEachCall)

// todo: map function:


// let output = []

// function mapFunction(arr,callback){

//   for(let i=0; i<arr.length; i++){
//      let data = callback(arr[i],i,arr)
//      output.push(data)
//   }

//   return output
// }

// function mapCall(ele,index,arr){
//   return arr
  
// }

// let arr = [1,2,3,4,5,6]

// let mapOutput = mapFunction(arr,mapCall)
// console.log(mapOutput);


//todo: filter 

let result = []

function ownfilter(arr,callback){
  for(let i=0; i<arr.length; i++){

    if(callback(arr[i])){
      result.push(arr[i])
    }
  }

  return result
}

function callfilter(ele){
  return ele>18
}

let arr = [12,23,12,32,12,13,43]
let outputNewFilter = ownfilter(arr,callfilter)

console.log(outputNewFilter);





//! for interview purpose how to make foreach,map and filter


// Array.prototype.forEachonefunction=function(callback){
//   for(let i =0; i< this.length; i++){
//     callback(this[i], i, this)
//   }
// }



// Array.prototype.forEachTwofunction = function(callback,context){
//   if(typeof callback !== "function"){
//     throw "This is an error"
//   }

//   const length = this.length
//   for(let i = 0; i<length; i++){
//     if(this.hasOwnProperty(i)){
//       callback.call(context,this[i],i,this)
//     }
//   }
// }

// let arr = [1,2,3,4,5]

// arr.forEachTwofunction((ele)=>{
//   console.log(ele);
// })

