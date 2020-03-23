let userAction = process.argv.pop();
console.log(userAction);
let computerAction = null;

let randomValue = Math.random() * 3;

if (randomValue < 1) {
  computerAction = 'scissor';
} else if (randomValue > 2) {
  computerAction = 'rock';
} else {
  computerAction = 'cloth';
}

console.log(computerAction);

if (userAction === computerAction) {
  console.log('平局');
} else if (
  (userAction === 'scissor' && computerAction === 'cloth') ||
  (userAction === 'rock' && computerAction === 'scissor') ||
  (userAction === 'cloth' && computerAction === 'rock')
) {
  console.log('用户赢');
} else {
  console.log('电脑赢');
}
