//3. Создать функцию, которая принимает 2 параметра: город и температуру и выводит сообщение в консоль

function showTemperature(city, temperature) {
  console.log (`Сейчас в ${city} температура - ${temperature} градусов по Цельсию`)
}

showTemperature("Казани", 15);

//4. Создать переменную, которая хранит внутри себя скорость света

const SPEED_OF_LIGHT = 299792458;

function checkSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log("Сверхстветовая скорость");
  } else if (speed < SPEED_OF_LIGHT) {
    console.log("Субстветовая скорость")
  } else {
    console.log("Скорость света");
  }
}

checkSpeed(2997);

// 5. Создать переменную №1, которая содержит продукт и переменную №2, которая содержит его цену

const product = "MacBook Air";
const price_product = 250;

function checkBudget(budget) {
  if (budget > price_product) {
    console.log(`${product} приобретен. Спасибо за покупку`)
  } else {
    const price_difference = price_product-budget;
    console.log(`Вам не хватает ${price_difference}, пополните баланс`)
  }
}

checkBudget(150);

//6. Создать 1 функцию и именовать её по своему усмотрению

function speakGood() {
  console.log("Говори благое либо молчи")
}

speakGood();

//7. Создать 3 переменных (без разницы каких) и именовать их по своему усмотрению

let myMessage = "Мир тебе";
const first_name = "Ilnar";
const surname = "Galiullin";

console.log(myMessage);
console.log(`${surname} ${first_name}`);


const person = {
  "first name": "Влад",
  age: 20 
}

console.log (person["first name"])