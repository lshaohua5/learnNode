/**
 * commonjs 剪刀石头布 游戏
 * 用户连赢三次 电脑不玩了（一台有情绪的电脑）
 */

//let userAction = process.argv.pop();
//console.log(userAction);

const game = require('./lib/gameLib');
console.log(game);

let count = 0; // 记录用户赢的次数

process.stdin.on('data', e => {
  let userAction = e.toString().trim();
  let result = game(userAction);
  if (result === 1) {
    count++;
  }

  if (count === 3) {
    console.log('您太厉害了 我不玩了');
    process.exit();
  }
});
