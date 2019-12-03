const fs = require('fs');
const path = require('path');

const file = fs.readFileSync(path.join(__dirname, 'input.txt'));
const rows = Buffer.from(file)
  .toString()
  .split('\n')
  .map(str => parseInt(str));

const answer = rows
  .map(row => fuelMeAllTheWay(fuelMe(row)))
  .reduce((num, curr) => curr + num);

function fuelMeAllTheWay(number) {
  if (number <= 0) {
    return 0;
  }
  return number + fuelMeAllTheWay(fuelMe(number));
}

function fuelMe(num) {
  return Math.floor(num / 3) - 2;
}

console.log(answer);
