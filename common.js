console.log('start require');
const lib = require('./lib/lib.js');
console.log(lib);
console.log('end require');
lib.min = (a, b) => {
  return a - b;
};
