// methods to export js modules  to another file
// we can create as many function as we want in a single file which can be known as MODULES
//method 1

function sum(a, b) {
  return a + b;
}

exports.sum = sum;

//method 2
exports.diff = (a, b) => {
  return a + b;
};
