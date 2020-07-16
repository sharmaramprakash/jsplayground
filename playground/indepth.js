this.a = 70;
this.name = 'Ram';
this.age = 2;

(() => {
  console.log(this.a);
})();

function foo() {
  // the arrrow function taking the context this from within the context of this foo method.
  (() => {
    console.log(this.a);
  })();
  this.name = 'sita';

  let age = 55;
  // the value of this.name is not defined in the context of this this foo funtion.
  console.log(this.name);
  this.name = 'sita';
  console.log(this.name);

  console.log(this.age);
}

foo();

class Ram {
  constructor(name) {
    this.name = 'Shyam';
    this.age = 69;
  }
  getNameAge() {
    return `I am ${this.name} and my age is ${this.age}`;
  }
}

class Shyam extends Ram {
  constructor(name, age) {
    super(name, age);
    this.country = 'India';
  }
}

var shyamo = new Shyam('r', 454);

const counter = (function() {
  let counterValue = 0;

  return {
    increment() {
      ++counterValue;
    },

    get value() {
      return counterValue;
    }
  };
})();

counter.increment();
console.log(counter.value); // 1

counter.increment();
counter.increment();
console.log(counter.value); // 3

