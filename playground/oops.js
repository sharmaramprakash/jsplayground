var r = {s:7,y:8, get: () => 5}
delete r.get;
console.log(r)
console.log(r.y)
var count = 0;
for ( i in r) count++;
console.log(count)

function Brick() {
  this.width = 10;
  this.height = 20;
  this.get = () => this.width + this.height;  
}
Brick.prototype.anyThing = () => "Anything"

function BrickStone() {
  Brick.call(this);
  this.length = 50;
  this.width = 100;
}

var B = new Brick();
console.log("B", Brick.name)
console.log(B.get());


var BS = new BrickStone();
console.log('b', BS.width);
console.log(BS.get());
console.log(B.anyThing())

// Set doesn't add any duplicate key and adds only values
let mySet = new Set();
mySet.add(1);
mySet.add('some text');
mySet.add('foo');

console.log([...mySet])
mySet.add(1)
console.log(mySet)
mySet.has(1); // true
mySet.delete('foo');
mySet.size; // 2

// Object access - Object inside another Object
var g ={b:0,c:[12.44,8,[1,2]]}
var f = [{d: [1,3]},{a:{c:[8,9]}}]
console.log(f[1].a.c[1])
console.log(g.c[2][1])
for( i in g) console.log(i)


// Map key/value pair
let sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.set('elephant', 'toot');
sayings.size; // 3
sayings.get('fox'); // undefined
sayings.has('bird'); // false
sayings.delete('dog');
sayings.has('dog'); // false

for (let [key, value] of sayings) {
  console.log(key + ' goes ' + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0 

