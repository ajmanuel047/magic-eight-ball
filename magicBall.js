const userName = 'Paul';
userName !== '' ? console.log(`Hello ${userName}`) : console.log(`Hello`)
const userQuestion = 'When would Nigeria become better?'
console.log(`${userName} asked: ${userQuestion}`)
let randomNumber = Math.floor(Math.random() * 8)
let eightBall = '';
switch(randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy tray again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5: 
  eightBall = 'My sources say so';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  default:
    eightBall = 'Signs point to yes'
}


console.log(eightBall)       


   


