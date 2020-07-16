
//#region Run this region as a unit
// var myApp = {};
// (function() {
//     var id = 0;
//     this.next = function() {
//         return id++;
//     };
//     this.reset = function() {
//         id = 0;
//     }
//     this.age = 100;
// }).apply(myApp);

// console.log(
//     myApp.next(),
//     myApp.next(),
//     myApp.reset(),
//     myApp.next(),
//     myApp.age
// ); 

//#endregion

for(let i = 0; i < 3; i++) {
    const f = () => {
      console.log(i);
    }
    f();
  }

function colour() {

    setInterval(function () {

        if (document.getElementById('var').style.color == 'black')
            var col1 = 'blue';
        else
            col1 = 'black';

        // setting value of color 1 through var
        let col2;
        if (document.getElementById('let').style.color == 'black') {
          col2 = 'red';
        }
        else {
            col2 = 'black';
        }

        // setting value of color 2 through let

        document.getElementById('var').style.color = col1;

        document.getElementById('let').style.color = col2;

       // changing color of h1 in html
    }, 500);
}

'use strict';
var promiseCount = 0;

function testPromise() {
  let thisPromiseCount = ++promiseCount;

  let log = document.getElementById('log');
  log.insertAdjacentHTML(
    'beforeend',
    thisPromiseCount + ') Started (<small>Sync code started</small>)<br/>'
  );

  // We make a new promise: we promise a numeric count of this promise, starting from 1 (after waiting 3s)
  let p1 = new Promise(
    // The executor function is called with the ability to resolve or
    // reject the promise
    (resolve, reject) => {
      log.insertAdjacentHTML(
        'beforeend',
        thisPromiseCount +
          ') Promise started (<small>Async code started</small>)<br/>'
      );
      // This is only an example to create asynchronism
      window.setTimeout(function() {
        // We fulfill the promise !
        resolve(thisPromiseCount);
      }, Math.random() * 2000 + 1000);
    }
  );

  // We define what to do when the promise is resolved with the then() call,
  // and what to do when the promise is rejected with the catch() call
  p1.then(
    // Log the fulfillment value
    function(val) {
      log.insertAdjacentHTML(
        'beforeend',
        val + ') Promise fulfilled (<small>Async code terminated</small>)<br/>'
      );
    }
  ).catch(
    // Log the rejection reason
    reason => {
      console.log('Handle rejected promise (' + reason + ') here.');
    }
  );

  log.insertAdjacentHTML(
    'beforeend',
    thisPromiseCount +
      ') Promise made (<small>Sync code terminated</small>)<br/>'
  );
}

async function Ram() {
  Math.sqrt(16);

  let c = new XMLHttpRequest();
  c.open('get', 'https://www.google.com');
}
