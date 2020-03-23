exports.add = (a, b) => {
  return a + b;
};
exports.obj = {
  name: 'node',
  desc: 'node.js'
};

module.exports = function shoaName(name) {
  return name;
};
setTimeout(() => {
  console.log(exports);
}, 2000);
