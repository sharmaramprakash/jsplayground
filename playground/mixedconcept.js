const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name ? ', function(name) {
  rl.question('Where do you live ? ', function(country) {
//     console.log(`${name}, is a citizen of ${country}`);
    rl.close();
  });
});

rl.on('close', function() {
//   console.log('\nBYE BYE !!!');
  process.exit(0);
});

const prompt = require('prompt');

const properties = [
    {
        name: 'username',
        validator: /^[a-zA-Z\s\-]+$/,
        warning: 'Username must be only letters, spaces, or dashes'
    },
    {
        name: 'password',
        hidden: true
    }
];

prompt.start();

prompt.get(properties, function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
    console.log('  Password: ' + result.password);
});

function onErr(err) {
    console.log(err);
    return 1;
}

// Version of of Key/Value pair in JavaScript
(function(input) {
  let result = {};
  for (let i = 0; i < input.length; i++) {
    result.hasOwnProperty(input[i].toLowerCase())
      ? result[input[i].toLowerCase()]++
      : result.hasOwnProperty(input[i].toUpperCase())
      ? result[input[i].toUpperCase()]++
      : (result[input[i]] = 1);
  }
  // In case you dont count space in the string
  if (result.hasOwnProperty(' ')) delete result[' '];

  console.log(result);
})('Ram Prakash Sharma');

function Tree(name) {
  this.name = name;
}
Tree.prototype.age = function() {
  return 1;
};
console.log(Object.getOwnPropertyNames(Tree));

var myfirstObj = {
  x: 6,
  r: 8,
  7: 9,
  getAll: function() {
    console.log(`${this.x} - ${this.r} - ${this[7]} - ${this.u}`);
  }
};
var printObj = Object.create(myfirstObj);
printObj.u = 200;
printObj.getAll();
const myObj = Object.create(myfirstObj, {
  getFoo: {
    value: function() {
      return this.foo;
    }
  }
});
myObj.foo = 1;
myObj.x = 555; // We can overwrite the inherated properties
myObj.u = 100;
myObj.getAll();
for (i of Object.keys(myObj)) console.log(i);
console.log(Object.keys(myObj));
console.log(Object.getOwnPropertyNames(myObj));

(function(){
    var a = new Array(1,2);
    hey(a);

})()

function hey(a){
    a[1]++;
    a = a+a;
    console.log(a)
}
