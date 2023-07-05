console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// ### Required Features
// Update the `cart.js` file to do the following:

// - Create a global variable named `basket` and set it to an empty array.

let basket= [];


// - Create a function called `addItem`. It should:
//   - take an input parameter for a string `item`
//   - add the new item to the global array `basket`. 
//   - return `true` indicating the item was added
// const maxItems= 5;


function addItem(item) {
    basket.push(item);
    return (true);
}

console.log(addItem("apple"));



addItem("apples");
addItem("pears");
addItem("oranges");
addItem("bannana");


// - Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line

// listItems();

function listItems(){
    for (let i=0; i<basket.length; i++){
        console.log(basket[i]);
//         //let name ="getachew"
//         //empty(name); you would be passing throught the funcion. 
    }
}

console.log(listItems()); 

// - Create a function called `empty`. It should:
//   - reset the `basket` to an empty array

function empty(){
    basket = [];
    console.log(basket); 
}


empty(); 



// > __IMPORTANT__
// > Make sure that you are writing code *in the file* to test every function that you write!

// For example, to test `addItem`:
// ```
// console.log(`Basket is ${basket}`);
// console.log('Adding apples (expect true)', addItem('apples'));
// console.log(`Basket is now ${basket}`);
// ```

// ### Stretch Goals 
// Remember that Stretch Goals are not required, but will help you to further develop concepts from the skills we have covered.

// __Using functions in other functions!__

// 1. Add a global `const` named `maxItems` and set it to 5.
// const maxItems= 5;

// 2. Create a function called isFull(). It should:
//   - return `false` if the basket contains *less* than max number of items
//   - return `true` otherwise (equal or more than maxItems)
// function isFull(){
//     if (basket.length < maxItems){
//         return false; 
//     }else if(basket.length >= maxItems){
//         return true; 
//     }else {
    //console.log("something went wrong");
//}
// }
// 3. Update the required `addItem` function to:
//   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
//   - If an item was added to the array, return `true`
//   - If there was no room and the item could not be added return `false`
// function (basket, maxItems){
//     if (basket.length<=maxItems){
//         return false; 
//     }else {
//         return true; 
//     }
// }
// __Using Array built-in functions!__

// 4. Create a function called `removeItem`. It should:
//   - Take an input parameter for a string `item`
//   - Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
//   - Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
//   - Return the item removed or `null` if the item was not found

// addItem("apple"); 
// addItem("Bannana"); 
// addItem("red");
// let remove= "Bannana" 
// let remove2= " Kiwi" 

// function removeItem(item){
//     for (let i = 0; i < basket.length; i++); 
//     if(item === basket[i]){
//         let inToRemove = basket.indexOf(item); 
//         let removedItem = basket.splice(inToRemove, inToRemove) 
//         console.log(" end of basket with removed item", basket, removedItem); 
//         return removedItem.toString()
//     }else{ 
//         console.log("issue with removedItem"); 
//     }

// }
// removedItem(remove)
// removeItem(remove2)
// function addItem(basket, maxItems) {
//     console.log(item);
//     function isFull(basket, maxItems){
//         if (isFull){
//         return false;
//     }else{
//         return true;
//     }
// }



/// you can call the block createBlock(); withouth console loggging the function.  






// DO NOT MODIFY
// Used for automated testing




// try {
//     module.exports = {
//         basket: typeof basket !== 'undefined' ? basket : undefined,
//         addItem: typeof addItem !== 'undefined' ? addItem : undefined,
//         listItems: typeof listItems !== 'undefined' ? listItems : undefined,
//         maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
//         empty: typeof empty !== 'undefined' ? empty : undefined,
//         isFull: typeof isFull !== 'undefined' ? isFull : undefined,
//         removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
//     };
// } catch(e) {
//     // Do nothing
// }
