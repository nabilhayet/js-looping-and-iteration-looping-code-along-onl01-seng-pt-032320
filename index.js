// Code your solutions in this file

const names = ["teddy bear", "drone", "doll"];
const message = []
function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {
    message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
 
  return message;
}

function countDown(value) {
    let i = value; // the initialization moved OUTSIDE the body of the loop!
    while (i >= 0) {
      console.log(i);
      i --; // the iteration moves INSIDE the body of the loop!
    }
  }
