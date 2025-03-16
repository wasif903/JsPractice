// ----------------------------------- Closures ------------------------------

// function closureExample() {
//     let count = 1;
//     return function innerFunc() {
//         count = count + 1
//         console.log(count)
//     }
// }

// const closureTest = closureExample();

// closureTest(); Output : 2
// closureTest(); Output : 3
// closureTest(); Output : 4
// closureTest(); Output : 5

// -- Advantages --
// It can retain access of the variables from the outer function

// -- Disadvantages --
// closures unintentionally retain references to variables, causing memory to remain allocated longer than necessary.


//--------------------------- Currying -----------------------------------------
// function curryingFunc(productPrice) {
//   return function innerFirst(discountPercentage) {
//     return function innerSecond(additionalCost) {
//       const discount = discountPercentage / 100 * productPrice;
//       const discountedCost = productPrice - discount + additionalCost;
//       console.log(`Original Price: ${productPrice}`);
//       console.log(`Discount (${discountPercentage}%): ${discount}`);
//       console.log(`Additional Cost: ${additionalCost}`);
//       console.log(`Final Price: ${discountedCost}`);
//     };
//   };
// }

// curryingFunc(150)(30)(20);

// -- Advantages --
// Function Reusablity

// -- Disadvantages --
// Currying relies on closures, which can unintentionally retain references to variables, causing memory to remain allocated longer than necessary.


