'use strict';

let users = [
  { id: 1, name: "Tony Stark" },
  { id: 2, name: "Bruce Banner" },
  { id: 3, name: "Steve Rogers" }
];

let ids = users.map(user => user.id);
console.log(ids);

let idsFn = users.map(function(user) { return user.id; });
console.log(idsFn);

debugger;

let ClickEvent = {
  init: function() {
    document.getElementById("action").addEventListener("click", function(event) {
      console.log("click");
      this.handleClick(event);
    })
  },
  handleClick: function(event) {
    console.log(event.x, event.y);
  }
}

ClickEvent.init();

let ClickEventArrow = {
  init: function() {
    document.getElementById("action2").addEventListener("click", (event) => {
      console.log("click arrow");
      this.handleClick(event);
    })
  },
  handleClick: function(event) {
    console.log(event.x, event.y);
  }
}

ClickEventArrow.init();
