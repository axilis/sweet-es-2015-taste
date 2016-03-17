'use strict';

let peoplePromise = new Promise(
  function(resolve, reject) {
    console.log("starting promise at " + performance.now());
    setTimeout(function() {
      console.log("promise ended at " + performance.now());
      let people = [{ id: 1, name: "Xavier" }, { id: 2, name: "Magneto" }];
      resolve(people);
    }, Math.random() * 2000 + 2000);
  }
);

peoplePromise
  .then(people => {
    console.log("Continuing at " + performance.now());
    console.log(people);
  })
  .catch(error => {
    console.log(error);
  })
