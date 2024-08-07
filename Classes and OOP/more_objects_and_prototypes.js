function multiplyBy5(num) {
    return num*2;
}
multiplyBy5.power = 2
console.log(multiplyBy5(8))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

/**Everything id JS is object 
 * In this case, a function is a function and behaves like it but if wanted it can also behave like object
*/


function createUser(username, score) {
    this.username = username
    this.score = score
}

//using prototype to create and inject increment
//using this to explain the context to JS, jasle bolayo (chai/tea) tyetai jane
createUser.prototype.increment = function() {
    this.score++
}

createUser.prototype.printMe = function() {
    console.log(`Score: ${this.score}`)
}
//using new to pass on the prototype on variable
const chai = new createUser("chai",25)
const tea = new createUser("tea", 150)

chai.printMe()
tea.printMe()

/**
 * Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

 */