'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

document.querySelector('.number').textContent = '?';
let score = 20;
let highscore = 0;
let randScore = Math.trunc(Math.random() * 9) + 10;
console.log(randScore);
let x = randScore;

const mes = function (message) {
  document.querySelector('.message').textContent = message;
};
const display = function (display) {
  document.querySelector('.guess').style.display = display;
  document.querySelector('.check').style.display = display;
};
const agEnd = function (display) {
  document.querySelector('.agEnd').style.display = display;
};
const againSt = function (bor, top, bot, brcl) {
  document.querySelector('.againSt').style.border = bor;
  document.querySelector('.againSt').style.top = top;
  document.querySelector('.againSt').style.bottom = bot;
  document.querySelector('.againSt').style.backgroundColor = brcl;
};
const cssNum = function (text, time) {
  document.querySelector('.number').style.animationDuration = time;
  document.querySelector('.number').textContent = text;
  // document.querySelector('.againSt').style.bottom = bot;
  // document.querySelector('.againSt').style.backgroundColor = brcl;
};

const gues = (document.querySelector('.guess').value = '');
// console.log(gues, typeof gues);
//
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  const guessBool = Boolean(document.querySelector('.guess').value);
  //
  if (guess === secretNumber) {
    mes('Thắng rồi nè! Làm thêm phát nữa đi');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '100%';
    display('none');
    againSt('4px solid #fff', '80%', '2rem', 'pink');
    cssNum(secretNumber, '0s');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
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
  }
  //Mạng cuối và lúc thua cuộc
  if (score <= randScore) {
    mes('Ngây thơ quá! Cậu nghĩ tớ thật sự sẽ cho cậu 20 mạng ư?');

    // document.querySelector('.message').style.marginBottom = '8rem';
    score = score - x + 1;
    x = score;
    document.querySelector('.score').textContent = score;
    //
    cssNum(secretNumber, '0.1s');
    if (guess !== secretNumber && score < 1) {
      display('none');
      againSt('4px solid #fff', '80%', '2rem', 'yellow');
      cssNum(secretNumber, '0s');
      mes(`Là ${secretNumber} đó đồ ngốc! Đã đen lại còn gà nữa!`);
    } else if (guess === secretNumber) {
      mes('Còn không làm được nữa thì chịu! Chơi thêm phát nữa đi');
      cssNum(secretNumber, '0s');
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  randScore = Math.trunc(Math.random() * 9) + 10;
  // document.querySelector('.message').textContent = 'Start guessing...';
  mes('Đoán tiếp nào...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  cssNum('?', '0s');
  display('inline-block');
  againSt('4px solid #fff', '2rem', '85%', '#fff');
});

document.querySelector('.guess').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
});
