'use strict';

export default function(text) {
  console.log(text);
}

export function red(text) {
  console.log('%c' + text, 'color: red');
}

function green(text) {
  console.log('%c' + text, 'color: green');
}

export function blue(text) {
  console.log('%c' + text, 'color: blue');
}
