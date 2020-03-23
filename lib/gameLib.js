/**
 *  平局 -1  用户赢 1  电脑赢 2
 */

module.exports = function game(userAction) {
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
    return 0;
  } else if (
    (userAction === 'scissor' && computerAction === 'cloth') ||
    (userAction === 'rock' && computerAction === 'scissor') ||
    (userAction === 'cloth' && computerAction === 'rock')
  ) {
    console.log('用户赢');
    return 1;
  } else {
    console.log('电脑赢');
    return 2;
  }
};
