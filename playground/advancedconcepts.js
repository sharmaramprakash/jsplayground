//1. ES6 Funtions
//2. Global Namespace
//3. IIFE
//4. this (this === window)
//5. Object Creation
//6. Prototypes
//7. Call
//8. Apply
//9. Bind
//10. Classes
//11. Closures
//12. Promises
//13. Callbacks
//14. XMLHttpRequest

function SayHello1(name) {
    return "Hello!" + name;
}

var SayHello2 = function (name) {
    return "Hello!" + name;
}

var SayHello3 = (name) => {
    return "Hello!" + name;
}

console.log(SayHello1("Ram"));
console.log(SayHello2("Ram"));
console.log(SayHello3("Ram"));


var mynamespace = mynamespace || {};

mynamespace.createNameSpace = function (namespace) {

    //get the namespace string and split it
    var namespaceArr = namespace.split(".");
    var parent = mynamespace;

    // excluding the parent
    if (namespaceArr[0] === "MYNAMESPACE") {
        namespaceArr = namespaceArr.slice(1);
    }

    // loop through the array and create a nested namespace
    for (var i = 0; i < namespaceArr.length; i++) {

        var partname = namespaceArr[i];

        // check if the current parent already has the namespace declared
        // if it isn't, then create it
        if (typeof parent[partname] === "undefined") {
            parent[partname] = {};
        }

        // get a reference to the deepest element in the hierarchy so far
        parent = parent[partname];
    }
    //  empty namespaces created and can be used.
    return parent;
};
var newNamespace = mynamespace.createNameSpace("MYNAMESPACE.COUNTRY.STATES");

newNamespace.product = function(price) {
    this.price = price;
    this.getCost = function(){
    return this.price;
    }
};


var holdingValue = 10;
function general() {
  holdingValue = 50;
}
general();
console.log(holdingValue);

(function () {
  holdingValue = 70;
})();
console.log(holdingValue);


