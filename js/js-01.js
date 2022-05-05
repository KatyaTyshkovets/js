// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);
let salary = 309.44444;
salary = Number(salary.toFixed(2));

console.log(salary);
console.log(Math.random(salary));


let value = prompt("Ведіть будь ласка число");
value = Number(value);
console.log(value);
let power = prompt("Ведіть будь ласка ступінь");
power = Number(power);
console.log(power);
const result = value ** power;
console.log(result);
 
const colors = ['teel', 'tomato', 'red', 'green', 'orange', 'deeplink'];
const max = colors.length -1;
const min = 0;
const index = Math.round(Math.random() * (max - min) + min);
const color = colors[index];
console.log(color);

document.body.style.background = color;

 // Напиши скрипт который рассчитывает индекс массы тела человека. Для этого
// необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота хранятся в переменных `weight` и `height`, но не как числа, а в
// виде строк (специально для задачи). Нецелые числа могут быть заданы в виде
// `24.7` или `24,7`, то есть в качестве разделителя дробной части может быть
// запятая.

// Индекс массиы тела необходимо округлить до одной цифры после запятой;
let weight = "88,3"; // 8 => 0 // 8 => 1 // ,=> 2 // 3 => 3
let height = "1.75";

let convertedWeight = parseFloat(weight);
let convertedHeight = parseFloat(height);

console.log(convertedWeight);
console.log(convertedHeight);

const bmii = convertedWeight / Math.pow(convertedHeight, 2);
console.log(bmii); // 28.8

// 1) потрібно знайти порядковий номер коми в рядочкус (indexOf)
// 2) відділити число від коми (slice)
// 3) отримати значення після коми (slice)
// 4) потрібно зробити парвильне дробове значення (template string)
// 5) можемо користуватися результатом

const index1 = weight.indexOf(",");

 const weightWithoutComma = weight.slice(0, index1);
 const weightAfterComma = weight.slice(index1 + 1); // 2 + 1

const newWeight = `${weightWithoutComma}.${weightAfterComma}`;

console.log(newWeight);
 const bmi = newWeight / Math.pow(height, 2);

 console.log(bmi);

let convertWeight = Number(weight);
let convertHeight = Number(height);

 console.log(convertWeight);
 console.log(convertHeight);

const answer = prompt(`"Какое официальное название JavaScript?"`);
const rigthAnswer = "ecmascript";
if (answer === rigthAnswer) {
    alert(Yes);
} else {
    alert(`Dont know ${rigthAnswer} ?`);
}
const hours = 14;
const minutes = 0;
let timeString;
if (minutes === 0) {
    timeString = `${hours} год.`;
} else {
    timeString = `${hours}год. ${minutes}`;
}
console.log(timeString);

const mx = 10;
for (let i = 0; i < mx; i += 1) {
  console.log(`${mx} % ${i} = `, mx % i);
}



let total = 0;
for (let i = 0; i <= 50; i += 1) {
    if (i % 5 === 1 || i % 3 === 1) {
      console.log(total += i); 
    }
}
console.log(total);



const daysUntilDeadline = 5;
let price;


switch (daysUntilDeadline) {
   case 0:
    console.log('Сегодня');
     
break;

case 1:
console.log('Завтра');
break;

case 3:
console.log('Послезавтра');
break;
default:
console.log('Дата в будущем');
}