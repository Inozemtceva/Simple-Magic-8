let userName = '';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

const userQuestion = '';
console.log(userQuestion);

document.querySelector('#generateAnswer').addEventListener('click', run);

function run() {
  const uName = document.querySelector('#userName').value;
  const uQuestion = document.querySelector('#userQuestion').value;


let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch (randomNumber) {
  case 1:
    eightBall = 'It is certain'; 
  break;
  case 2:
    eightBall = 'It is decidedly so'; 
  break;
  case 3:
    eightBall = 'Reply hazy try again';
  break;
  case 4:
    eightBall = 'Cannot predict now';
  break;
  case 5:
    eightBall = 'Do not count on it';
  break;
  case 6:
    eightBall = 'My sources say no';
  break;
  case 7:
    eightBall = 'Outlook not so good';
  break;
  case 0:
    eightBall = 'Signs point to yes';
  break;
}

document.querySelector('#placeToAnswer').innerText = `${uName}, you asked: ${uQuestion} \n Magic 8 Ball says: ${eightBall}`
}