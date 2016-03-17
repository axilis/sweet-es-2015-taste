'use strict';

const RandomCitizen = (function(name) {
  let _name = name;
  return {
    observe: function() {
      console.log("Admire superhero");
    },
    introduce: function() {
      console.log("I'm " + _name)
    }
  }
})

let bruce = new RandomCitizen("Bruce");
bruce.introduce();
bruce.observe();

debugger;

function Superhero() {
  this.fly = function() {
    console.log("Flying");
  }
  this.fight = function() {
    console.log("Fighting");
  }
}

let superman = new Superhero();
superman.fly();

debugger;

class Person {
  constructor(name) {
    this.name = name;
  }
  introduce() {
    console.log("Hi, I'm " + this.name);
  }
}

var tony = new Person("tony");
tony.introduce();

debugger;

class Villan extends Person {
  constructor(name) {
    super(name);
  }
  fight() {
    console.log("Fighting dirty");
  }
  gloat() {
    console.log("I'm so much better than you");
  }
  introduce() {
    super.introduce();
    console.log("Prepare to die (right after I tell you my world domination plan).");
  }
}

let ultron = new Villan("Ultron");
ultron.introduce();
