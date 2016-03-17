'use strict';

import consoleWriter, {red as warning, blue, green}  from './consoleWriter';

consoleWriter('Plain black text');

warning("red text");

blue("blue text");

import * as writer from './consoleWriter';

writer.default("plain");
writer.red("Colored");


// green("green text")
// writer.green("text");
