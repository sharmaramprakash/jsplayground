var arr = [1, 6, 8, 4];
delete arr[2];
var itertor = arr.entries();
for ([key, value] of itertor) console.log(key, value);

var obj = { a: 10, h: 8, g: 100 };
delete obj.h;
for ([key, value] in obj) console.log(key, value);

// Error handing in JavaScript
function UserException(message) {
  this.message = message;
  this.name = 'UserException';
}

// Make the exception convert to a pretty string when used as a string
// (e.g., by the error console)
UserException.prototype.toString = function() {
  return `My custon way of throwing error ${this.name}: "${this.message}"`;
};

// Create an instance of the object type and throw it
function UserError() {
  throw new UserException('Value too high');
}

/* -------------------------------------------------------------------------------- */
function getMonthName(mo) {
  mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw 'InvalidMonthNo'; // throw keyword is used here
  }
}

function trycatchblock() {
  try {
    // statements to try
    monthName = getMonthName(14); // function could throw exception
  } catch (e) { // this "e" is nothing but the object being thrown by throw above
    monthName = 'unknown';
    logMyErrors(e); // pass exception object to error handler (i.e. your own function)
  } finally {
    console.log('finally block');
  }

  console.log('Hello');
}

function logMyErrors(e) {
  console.error(e);
}

UserError(); // throws unhandled expection
trycatchblock(); // it will not run untill the exception in UserError is handled by catch block

function f() {
  'use strict';
  try {
    console.log(0);
    throw 'bogus';
  } catch (e) {
    console.log(1);
    return true; // this return statement is suspended
    // until finally block has completed
    console.log(2); // not reachable
    console.log('now throw suspended');
    //throw "my error"
  } finally {
    console.log(3);
    //return false; // overwrites the previous "return"
    console.log(4); // not reachable
    throw 'finally throw';
  }cl
  // "return false" is executed now
  console.log(5); // not reachable
}

try {
  console.log(f()); // 0, 1, 3, false
  console.log('second try');
} catch (error) {
  console.log(error);
} finally {
  console.log('outer finally');
}

(function Sum() {
  var arg = process.argv;
  var newarry = arg.slice(2);
  console.log(arg)
  let sum = 0;
  for (i of newarry) sum +=  parent(i)
  console.log(sum);
})()

function Sum(num) {
  return num1 => num + num1;
}
console.log(Sum(6)(5));

console.log(global);
console.log(window)

function RamClosed(t) {
  this.t = t;
  this.circle = {
    radius: 50,
    shapeinside: {
      radius: 66,
      diameter: function() {
        return 2 * this.radius;
      },
      perimeter: () => 2 * this.radius
    }
  };
}

var rc = new RamClosed('only t');
console.log(rc.circle.shapeinside.diameter());

var circle = {
  radius: 50,
  shapeinside: {
    radius: 66,
    diameter: function() {
      return 2 * this.radius;
    },
    perimeter: () => 2 * this.radius
  }
};

console.log(circle.shapeinside.radius);
console.log(circle.shapeinside.diameter());
console.log(circle.shapeinside.perimeter());

console.log('-------------------');

this.radius= 100;
var shapeglobal = {
  radius: 10,
  diameter: function() {
    return 2 * this.radius;
  },
  perimeter: () => 2 * this.radius
};

console.log(shapeglobal.radius);

console.log(shapeglobal.diameter());

console.log(shapeglobal.perimeter());

var p = shapeglobal.diameter;
var a = shapeglobal.perimeter;

console.log(this.radius)
console.log(p());
console.log(a());

bondedP = p.bind(shapeglobal);
bondedA = a.bind(shapeglobal);

console.log(bondedP());
console.log(bondedA());


Sum(1)(2)(3).tovalue()
var o = Object.create({inherited: 1}, {
  foo: {
    get: (function () { // a closure
      var closured = 'foo';
      return function () {
        return closured+'bar';
      };
    })()
  }
});

o.foo; // "foobar"
