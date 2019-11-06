// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodowntwo-naseerhines');

// test with line npm start --prefix ./naseerhines.github.io/projects/let-s-get-functional

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

 /*
 ### 1: `maleCount`
 - **Objective**: Find the number of male customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**: use `filter`
 */
var maleCount = function(array) {
    let test = function (element,index,array){
       if (array[index].gender === "male"){
         return true;
       }
    };
    return _.filter(array,test).length;
};


 /*
 ### 2: `femaleCount`
 - **Objective**: Find the number of female customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**: use `reduce`
 */
var femaleCount = function(array,){
    function callback(last, element, index){
    let fem = 0;
    if (array[index].gender === "female"){
        fem++;
    }
        return last + fem;
    }
    return _.reduce(array, callback, 0);
};


 /*
 ### 3: `oldestCustomer`
 - **Objective**: Find the oldest customer's name
 - **Input**: `Array`
 - **Output**: `String`
 - **Constraints**:
 */
var oldestCustomer = function (array){
    let x = 0;
    for(let i = 0; i < array.length; i++){
        if (array[i].age > array[x].age){
            x = i;
        }
    }
    return array[x].name;
};


 /*
 ### 4: `youngestCustomer`
 - **Objective**: Find the youngest customer's name
 - **Input**: `Array`
 - **Output**: `String`
 - **Constraints**:
 */
var youngestCustomer = function (array){
    let x = 0;
    for(let i = 0; i < array.length; i++){
        if (array[i].age < array[x].age){
            x = i;
        }
    }
    return array[x].name;
};


 /*
 ### 5: `averageBalance`
 - **Objective**: Find the average balance of all customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**:
 */
var averageBalance = function(array) {
    let final = 0;
    for (let i = 0; i<array.length; i++) {
        let fug = array[i].balance.replace(",","");
        fug = fug.replace("$","");
        fug = parseFloat(fug);
        final = final + fug;
    }
    let avg = (final/array.length);
    avg = parseFloat(avg.toFixed(2)) - .01;
    return avg;
};

var firstLetterCount = function(array, letter){
  //takes an array and a letter
  //returns a number
  //find how many customers names begin with a given letter
  //counter
  //use filter
  let counterArray = _.filter(array, function tester (element, index, array){
   //return true if name starts with given letter
   // has letter in scope
   return array[index]["name"].toLowerCase() === letter.toLowerCase();
  });
  //number to return
  return counterArray.length;
//  let counter = 0;
//  for (let i = 0; i<array.length; i++){
//   if (array[i]["name"][0].toLowerCase() === letter.toLowerCase()){
//   counter++;
//   }
//  }
//  return counter;
 
};


var friendFirstLetterCount = function (array, customer, letter){
 //counter of occurances
 let counter = 0;
 //looper
 //customer probably customer name, search array for customer and save to variable
 //use indexof
 let cusIndex = 0;
 //find customer
 for (let i = 0; i<array.length; i ++){
  if (array[i].name === customer){
   cusIndex = i;
  }
 }
 
 for (let i = 0; i < array[cusIndex].friends.length; i++){
  //already have customer, so this is the array of their friends. check for first letter
  if (letter.toLowerCase() === array[cusIndex].friends[i].name[0].toLowerCase()){
   counter ++;
  }
 }
 return counter;
};


var friendsCount = function (array, named){
 //returns array of names of people who have 'name' on their friends list
 //iterate through people array, push the name of people who have this persons name on theirs friends list on to
 // the return array
 let myArray = [];
 for(let i= 0; i< array.length; i++){
  //now loop this objects friends array
   for (let j =0; j <array[i].friends.length; j++){
    //now check each of these objects name properties to equal name
    if (array[i].friends[j].name ===named){
     myArray.push(array[i].name);
    }
   }
 }
 return myArray;
};


var topThreeTags = function (arr){
let holder = {};
//o find the three most common tags
//tags are in array under the key  tags
//need to tally all possible strings
//so a string should either add 1 to its already declared value, or create itself with a value of 1
//then put the highest of these in array, then the second highest, then the third highest
//could loop through declaring all tags as key properties of an object, with a value of 0
for (let i = 0; i < arr.length; i ++){
 //now look at tags on the current object, which are an array so need another loop
 for (let j = 0; j < arr[i]["tags"].length; j++){
  //take each of these values and assign as a property w value of  0 to holder.
  holder[arr[i]["tags"][j]] = 0;
 }
}
 //done assigning all values as keys with prop of 0 to holder, now tally
//then could loop through, adding the amount of times these key values show up as +=1
for (let i = 0; i< arr.length; i++){
 for (let j = 0; j < arr[i]["tags"].length; j++){
  holder[arr[i]["tags"][j]] ++;
 }
}
 
let highest0 = {brandName : "", amount : 0};
let highest1 = {brandName : "", amount : 0};
let highest2 = {brandName : "", amount : 0};
//loop through holder object for highest 3
//to loop through object do for key in loop
//for top three, loop three times
let currentHighest = {};
for (let i = 0; i<3; i++){
  if(i ===0){
   currentHighest = highest0;
   
  
   //need to take out the previouslyu highest from holder object
  }else if (i === 1){
   delete holder[[highest0["brandName"]]];
   currentHighest = highest1;
    
  }else if (i === 2){
   delete holder[[highest1["brandName"]]];
   currentHighest = highest2;
   
  }
   for (let brand in holder){
    if (holder[brand] > currentHighest["amount"]){
     //now set brand name and amount
     currentHighest.brandName = brand;
     currentHighest.amount = holder[brand];
     
    }
   }
}
//then loop througn new
//input array
//output array
let result = [highest0.brandName, highest1.brandName, highest2.brandName];
 return result;
};
topThreeTags(customers);


var genderCount = function(array,){
//function for reduce
//takes arguments previous result, element, index
//inputs total, element, index
//outputs total aka num
//create a object literal called all
var all = {};
function nonBinaryFilter(pResult, element, index){
 //create a object literal called all
 var all = {};
 //non-binary
 let nonBinary = 0;
 if (array[index].gender === "non-binary"){
  nonBinary ++;
 }
  return pResult + nonBinary;
 }
 //pass array from non-binary count
 //pass a function that returns a number 1 or 0 if non-binary present
 //pass a seed start of 0
 //set the returns of each function call to a key and added to all object
all["non-binary"] = _.reduce(array, nonBinaryFilter, 0);
all.male = maleCount(array);
all.female = femaleCount(array);
//return all object
return all;
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
