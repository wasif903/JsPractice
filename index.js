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

// Better Approach Than Currying
// function calculatePrice(productPrice, discountPercentage, additionalCost) {
//     const discount = (discountPercentage / 100) * productPrice;
//     const finalPrice = productPrice - discount + additionalCost;
//     console.log(`Final Price: ${finalPrice}`);
//   }
//   calculatePrice(150, 30, 20);



//---------------------------- Arrow Function Vs Normal Function ----------------------------
// Normal Function:
// In a regular function, this refers to the object that called the function.
// const Obj = {
//     name: "Wasif",
//     designation: "Mernstack Developer",
//     data: {
//         teamLead: "Rehman"
//     },
//     sayHello : function () {
//         console.log("Myself",this.name, "and i work as a", this.designation, 'and sadly i work under a chutiya named', this.data.teamLead)
//     }
// }
// Obj.sayHello();

// Arrow Function:
// Since the arrow function doesn’t have its own this, it tries to use this from the outer scope — which in this case is the global object (or undefined in strict mode).
// const Obj = {
//   name: "Wasif",
//   designation: "Mernstack Developer",
//   data: {
//     teamLead: "Rehman"
//   },
//   sayHello: function() {
//    return (() => {
//         console.log(
//             "Myself",
//             this.name,
//             "and i work as a",
//             this.designation,
//             "and sadly i work under a chutiya named",
//             this.data.teamLead
//         );
//     })()
//   }
// };
// Obj.sayHello();


//---------------------------- Hoisting  ----------------------------
// In JavaScript, hoisting is the process where variable and function declarations are moved to the top of their containing scope (either function or global) during the compilation phase. but javascript doesn't do it with let and const because of TDZ, The Temporal Dead Zone (TDZ) is the period between the start of a scope and the point where a variable declared with let or const is initialized.

// function hoisting() {
//     count = 1;
//     console.log(count)
//     var count;
// }
// hoisting();
