'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';
let score = 20;
let highscore = 0;
const mes = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  const guessBool = Boolean(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //
  if (guess == secretNumber) {
    mes('Thắng rồi nè! Làm thêm phát nữa đi');
    // document.querySelector('.guess').textContent = 0;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '100%';
  } else if (guess != secretNumber) {
    if (guess <= 22 && guess > 0) {
      mes(guess > secretNumber ? '📈 Thấp thôi!' : '📉 Lên nữa!');
    } else {
      mes(
        guess >= 22 || guess < 0 || guessBool === true
          ? 'Từ 1 đến 20 thôi! Đồ ngốc!'
          : 'Chưa nhập số kìa! Có biết chơi không vậy?'
      );
    }
    score--;
    document.querySelector('.score').textContent = score;
    if (score <= Math.trunc(Math.random() * 9) + 10) {
      mes('Ngây thơ quá! Cậu nghĩ tớ thật sự sẽ cho cậu 20 mạng ư?');
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  mes('Đoán tiếp nào...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
document.querySelector('.guess').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
});
