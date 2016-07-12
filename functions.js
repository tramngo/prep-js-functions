/**
 *  Below are some specifications for Functions to be built.
 *
 *  #1
 *  Declare Two Variables
 *     - `a` random Number value
 *     - `b` random Number value
 *
 *  We will be using both of these variables to pass as `parameters` to the
 *  following functions that we will write. Pay close attention to the other
 *  variable names you will create as they will become input to _other_
 *  functions.
 */

var a = 7;
var b = 3;


/**
 *  #2
 *  Function - add
 *
 *  This function returns the result of adding `a` and `b` together.
 *  Store this value in a variable named `sum`.
 */

//console.log (sum);

function add(number1,number2) {
	return number1 + number2;
 }
add();

var sum  = add(a,b);
console.log(sum);


/**
 *  #3
 *  Function - subtract
 *
 *  This function returns the result of subtracting `b` from `a`.
 *  Store this value in a variable named `difference`
 */

function subtract(number1,number2) {
	return number2 - number1;
}
var difference = subtract(a,b);
console.log(difference);

/**
 *  #4
 *  Function - multiply
 *
 *  This function returns the result of multiplying `b` by `a`.
 *  Store this value in a variable named `product`
 */

function multiply(number1,number2) {
	return number2 * number1
}
var product = multiply(a,b);
console.log(product);

/**
 *  #5
 *  Function - checkDifference
 *
 *  This function accesses the value stored in the `difference`
 *  variable and uses this number to return the string
 *  "My football team lost X times this week", where `X` is the
 *  value stored in `difference`.
 */

function checkDifference(X){
	return "My football team lost " + difference + " times this week";
}
console.log(checkDifference());

/**
 *  #6
 *  Function - checkSum
 *
 *  This function checks the value stored at `sum` and
 *  uses that number to print to the screen the phrase
 *  "I CAN ADDZ X NUMBERS"  where `X` is the value
 *  stored in the variable `sum`.
 */

function checkSum () {
	return "I CAN ADDZ " + sum  + " NUMBERS"
}
console.log(checkSum());

/**
 *  #7
 *  Function - checkProduct
 *
 *  This function checks the value stored at `product` 
 *  multiplies it by the number stored at `difference` and
 *  then prints the result to the console.
 */

function checkProduct () {
	return product * difference;
}

console.log(checkProduct());


/**
 *  #8
 *  Function - addThenSubtract
 *
 *  This function takes three `Number` arguments named by you,
 *  then adds the first two arguments together.
 *  Then with the sum of that operation, subtract
 *  the value at the third argument. _This function should
 *  make use of your previous functions_.
 *
 *  **example:**
 *      addThenSubtract(4, 5, 7); //-> returns 2 because 4 + 5 - 7 = 2
 */

function addThenSubtract(number1,number2,number3){
	return (number1 + number2) - number3;
}

var addThenMinus = addThenSubtract (sum, difference, product);
console.log(addThenMinus);


/**
 *  #9
 *  Function - addThenMultiply
 *
 *  This function takes three `Number` arguments named by you,
 *  then adds the first two arguments together.
 *  Then with the sum of that operation multiply it by the third argument.
 *  _This function also should make use of your previous functions_.
 *
 *  Store the return of this function to a variable named `howMany`
 */

function addThenMultiply(number1,number2,number3){
	return (number1 + number2) * number3;
}

var howMany = addThenMultiply(sum,difference,product);
console.log(howMany)

/**
 *  #10
 *  Function - createFullName
 *
 *  @param Datatype: String firstName
 *  @param Datatype: String lastName
 *  @return Datatype: String
 *
 * This function takes two String arguments `firstName` and `lastName`.
 * This function `returns` back a string which represents someone's full name.
 *
 * Call this function and pass your first and last name into it.
 * Store the return value to a variable named `myFullName`
 */
 
function createFullName(firstName,lastName) {
	var result = ""; 
	result = firstName + " " + lastName 
	return result;
}

var myName = createFullName("Tram", "Ngo")
var neighbor = createFullName("Holly","Wood")
console.log(myName);
console.log("My neighbor's name is" + neighbor);

/**
 *  #11
 *  Function - verifyDrinkingAge
 *
 *  @param Datatype: Number age
 *  @return Datatype: Boolean
 *
 *  This function takes one Number argument `age`.
 *  This function returns the `Boolean` value `true` or `false` if `age` is
 *  lower than the legal drinking age in the state of Hawaii.
 *
 *  **Call this function and pass in a number value.
 *  Store the return value to a variable named** `canDrinkBeer`
 */

function verifyDrinkingAge(age){
	var result;

	result = age >=21; 
	return result; 
}

var canDrinkBeer = verifyDrinkingAge(25); 
console.log('Can I drink beer?: ' + canDrinkBeer);


/**
 *  #12
 *  Function - throwParty
 *
 *  This function checks the value stored at the `canDrinkBeer` variable and
 *  if the value is `false` it should print to a message to the screen,
 *  "The Party will have tons of Cake!" otherwise this message
 *  should be "This Party will have an open bar".
 */

//Method 1
function throwParty(age){

	 if (canDrinkBeer === false) {
		return "The Party will have tons of Cake!"
	} else {
		return "This Party will have an open bar."
	} 
}
console.log(throwParty (canDrinkBeer));

/**
 *  #13
 *  Function - eatFood
 *
 *  This function takes 3 arguments
 *  `firstName`, `lastName`, `food` and prints out a message to your screen.
 *  Internally this function will make use of the `createFullName`
 *  function you created earlier.
 *
 *  **example input:**
 *      if someone called your program like this `eatFood( "John", "Papa", "Pizza" )`
 *  **example output:**
 *     "John Papa loves to eat Pizza"
 *
 *  **example input:**
 *      if someone called your program like this `eatFood( "Peter", "Bojangles", "California Burritos" )`
  *  **example output:**
 *      "Peter Bojanglesloves loves to eat California Burritos"
 */

function eatFood(firstName, lastName, food){
  return firstName + " " + lastName + " loves to eat " + food +".";
}

var eaten = eatFood("Biggie", "Smallz", "manapuas");
console.log(eaten);


/**
 *  #14
 *  Function - repeater
 *
 *  This function will return a string to that repeats one of the phrases
 *  below `X` amount of times, where `X` is the value stored at `howMany`.
 *  Inside of this function it will check if
 *  the value of `canDrinkBeer`, if the value is true
 *  the message will be `"Bacon Pancakes, makin' Bacon Pancakes..."`
 *  othewise the message will be `"Let it go.... LET IT GOOOOOOoOoOoOo..."`
 */


function repeater(printX, oldEnuff){
  for(var i = 0; i<printX; i++){
    if(oldEnuff){
    console.log("Bacon Pancakes, makin' Bacon Pankcakes...");
  }else{
    console.log("Let it go....LET IT GOOOOOOoOoOoOo")
  }
}
}

repeater(howMany, canDrinkBeer);
