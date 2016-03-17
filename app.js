'use strict';

function getAddress() {
  let address = {
    city: "Gotham",
    state: "USA",
    location: "Bat cave"
  };
  return address;
}

let address = getAddress();
console.log(address);
console.log(address.city);
console.log(address.state);
console.log(address.location);

debugger;

let { city, state, location } = getAddress();

console.log(city);
console.log(state);
console.log(location);

debugger;

let { city: c, state: s } = getAddress();
console.log(c);
console.log(s);

debugger;

let superman = {
  firstName: "Clark",
  lastName: "Kent",
  city: "Smallville"
}

function revealSuperman(superman) {
  let firstName = superman.firstName || "Unknown";
  let middleName = superman.middleName || "Unknown";
  let lastName = superman.lastName || "Unknown";
  let city = superman.city || "Unknown";
  console.log("Superman first name: " + firstName);
  console.log("Superman middle name: " + middleName);
  console.log("Superman last name: " + lastName);
  console.log("Superman city: " + city);
}

revealSuperman(superman);

function revealSupermanDestructured({
    firstName = "Unknown", middleName = "Unknown",
    lastName = "Unknown", city = "Unknown" }) {
  console.log("Superman first name: " + firstName);
  console.log("Superman middle name: " + middleName);
  console.log("Superman last name: " + lastName);
  console.log("Superman city: " + city);
}

revealSupermanDestructured(superman);
