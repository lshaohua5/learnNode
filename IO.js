/**
 * node.js 非阻塞IO
 * glob 读取文件
 */

const glob = require('glob');

let result = null;
console.time('glob');
result = glob.sync(__dirname + '/**/*');
console.timeEnd('glob');
console.log(1 + 2);
console.log(result);

let asyncResult = null;
console.time('asyncResult');
glob(__dirname + '/**/*', function(err, res) {
  asyncResult = res;
  console.log(asyncResult);
});
console.timeEnd('asyncResult');
console.log(`非阻塞IO asyncResult:${asyncResult}`);
console.log(1 + 1);
