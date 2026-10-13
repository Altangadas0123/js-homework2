// const number = 0; 
// if (number > 0) {
//   console.log("Эерэг");
// } else if (number < 0) {
//   console.log("Сөрөг");
// } else if (number === 0) {
//   console.log("Тэг");
// }
// ===================================================================
// const age = 1;
// if (age < 0) {
//   console.log("Буруу нас");
// } else if (age < 12) {
//   console.log("Хүүхэд");
// } else if (age < 18) {
//   console.log("Өсвөр нас");
// } else {
//   console.log("Насанд хүрсэн");
// }
// ===================================================================
// const score = 101;
// if (score < 0) {
//   console.log("Буруу оноо");
// } else if (score <= 59) {
//   console.log("F");
// } else if (score <= 69) {
//   console.log("D");
// } else if (score <= 79) {
//   console.log("C");
// } else if (score <= 89) {
//   console.log("B");
// } else if (score <= 100) {
//   console.log("A");
// } else {
//   console.log("Буруу оноо");
// }
// ===================================================================
// const temperature = 21;
// if (temperature < 0) {
//   console.log("Хүйтэн");
// } else if (temperature <= 20) {
//   console.log("Сэрүүн");
// } else if (temperature > 20) {
//   console.log("Дулаан");
// }
// ===================================================================
// const a = 2;
// const b = 1;
// if (a === b) {
//   console.log("Тэнцүү");
// } else if (a > b) {
//   console.log("Эхний тоо их");
// } else {
//   console.log("Хоёр дахь тоо их");
// }
// ===================================================================
// const total = 190000;
// if (total < 100000) {
//   console.log(total);
// } else if (total < 200000) {
//   console.log(total - total * 0.1);
// } else {
//   console.log(total - total * 0.2);
// }
// ===================================================================
// const battery = -110;
// if (battery === 100) {
//   console.log("Бүрэн цэнэгтэй");
// } else if (battery < 100 && battery >= 20) {
//   console.log("Цэнэг хэвийн");
// }else if (battery < 20 && battery >= 1) {
//   console.log("Цэнэг бага");
// } else if (battery === 0) {
//   console.log("Унтарсан");
// }  else {
//   console.log("Буруу утга");
// }
// ===================================================================
// const color = "улаан";
// if (color === "улаан") {
//   console.log("Зогс");
// } else if (color === "шар") {
//   console.log("Хүлээ");
// } else if (color === "ногоон") {
//   console.log("Яв");
// } else {
//   console.log("Буруу өнгө");
// }
// ===================================================================
// const distance = -10;
// if (distance > 0 && distance <= 3) {
//   console.log(3000);
// } else if (distance > 3 && distance <=10) {
//   console.log(5000);
// } else if (distance >10) {
//   console.log(8000);
// } else {
//   console.log("Буруу зай");
// }
// ===================================================================
// const secret = 7;
// const guess = 7;
// if (guess < secret) {
//   console.log("Илүү их тоо сонгоорой");
// } else if (guess > secret) {
//   console.log("Илүү бага тоо сонгоорой");
// } else if (guess === secret) {
//   console.log("Зөв таалаа!");
// }
// ===================================================================
// const number = 6;
// const too = number % 5;
// if (too === 0) {
//   console.log("yes");
// } else {
//   console.log("no");
// }
// ===================================================================
// const number = 3333332;
// const calc = number % 2
// if (calc === 0) {
//   console.log("even");
// } else if (calc === 1) {
//   console.log( "odd");
// }
// ===================================================================
// const number = 8;
// const fizz = number % 3;
// const buzz = number % 5;
// if (fizz === 0 && buzz === 0) {
//   console.log("FizzBuzz");
// } else if (fizz === 0) {
//   console.log("Fizz");
// } else if (buzz === 0) {
//   console.log("Buzz");
// } else {
//   console.log(number);
// }
// ===================================================================
// let number = 2;
// if (number > 100) {
//   number = 100;
//   console.log(number);
// }
// ===================================================================
// /* тэгш тоо болгох */


// let number = 3.2;
// const too = number % 2;

// if (!Number.isInteger(number) === true) {
//   number = Math.trunc(number);
// }

// if (too === 0) {
//   console.log(number);
// } else {
//   console.log(number + 1);
// }
// ===================================================================
// let number = -3;
// if (number >= 0) {
//   console.log(number);
// } else {
//   number = number * -1;
//   console.log(number)
// }
// ===================================================================
// let lastDigit = 2229;
// lastDigit = lastDigit % 10;
// if (lastDigit === 1 || lastDigit === 6) {
//   console.log("Даваа");
// } else if (lastDigit === 2 || lastDigit === 7) {
//   console.log("Мягмар");
// } else if (lastDigit === 3 || lastDigit === 8) {
//   console.log("Лхагва");
// } else if (lastDigit === 4 || lastDigit === 9) {
//   console.log("Пүрэв");
// } else if (lastDigit === 5 || lastDigit === 0) {
//   console.log("Баасан");
// } else {
//   console.log("буруу дугаар");
// }
// ===================================================================
// const day = 9;
// if (day === 1) {
//   console.log("Monday");
// } else if (day === 2) {
//   console.log("Tuesday");
// } else if (day === 3) {
//   console.log("Wednesday");
// } else if (day === 4) {
//   console.log("Thursday");
// } else if (day === 5) {
//   console.log("Friday");
// } else if (day === 6) {
//   console.log("Saturday");
// } else if (day === 7) {
//   console.log("Sunday");
// } else {
//   console.log("Буруу дугаар");
// }
// ===================================================================
// const a = 2;
// const b = 5;
// const c = 2;
// const ab = a + b;
// const ac = a + c;
// const bc = b + c;
// if (a > 0 && b > 0 && c > 0 && ab > c && ac > b && bc > a) {
//   console.log("yes");
// } else {
//   console.log("no");
// }
// ===================================================================
// const year = 1888;
// let oYear = year % 4;
// if (oYear === 0 && (year - 1896) >= 0 ) {
//   console.log("Зуны олимпийн жил");
// } else if (oYear >= 0 && (year - 1896) >= 0) {
//   console.log("Зуны олимпийн жил биш");
// } else {
//   console.log("Зуны олимп болж байгаагүй");
// }
// ===================================================================
// const year = 1998;
// let oYear = year % 4;
// if (oYear === 0 && (year - 1924) >= 0 && year <= 1992) {
//   console.log("Өвлийн олимпийн жил");
// } else if (oYear >= 0 && (year - 1924) >= 0 && year <= 1992) {
//   console.log("Өвлийн олимпийн жил биш");
// } else if (year <= 1992) {
//   console.log("Өвлийн олимп болж байгаагүй");
// }

// let nOYear = 1994;
// nOYear = (year - nOYear) % 4;
// if (year >= 1994 && nOYear === 0) {
//   console.log("Өвлийн олимпийн жил");
// } else if (year >= 1994) {
//   console.log("Өвлийн олимпийн жил биш");
// }
// ===================================================================
// const month = 6;
// switch (month) {
//   case 12:
//   case 1:
//   case 2:
//     console.log("Өвөл");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Хавар");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Зун");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Намар");
//     break;
//   default:
//     console.log("Буруу сарын дугаар")
// }
// ===================================================================
// const fuelType = "D";
// const liters = 2;
// switch (fuelType) {
//   case 92:
//     price = 5500;
//     console.log(price * liters)
//     break;
//   case 95:
//     price = 7000;
//     console.log(price * liters)
//     break;
//   case "D":
//     price = 6000;
//     console.log(price * liters)
//     break;
//   default:
//   console.log("Шатахууны төрөл буруу")
// }
// ===================================================================
// const a = 3;
// const b = 2;
// const c = 2;
// if (a > b && b > c) {
//   console.log("true")
// } else {
//   console.log("false")
// }
// ===================================================================
// const a = 2;
// const b = 2;
// const c = 2;
// if (a === b && b === c) {
//   console.log("true")
// } else {
//   console.log("false")
// }
// ===================================================================
// const a = 2;
// const b = 2;
// const c = 0;
// if (a >= 0 && b >= 0 && c >= 0) {
//   console.log("true")
// } else {
//   console.log("false")
// }
// ===================================================================
// let a = 2;
// let b = 2;
// let c = 0;

// a = a % 2;
// b = b % 2;
// c = c % 2;
// if (a === 0 && b === 0 && c === 0) {
//   console.log("true")
// } else {
//   console.log("false")
// }
// ===================================================================
// let a = 2;
// let b = 2;
// let c = 0;
// if  (a < 0 || b < 0 || c < 0) {
//   console.log("true")
// } else {
//   console.log("false")
// }
// ===================================================================
// const number = 90;
// let a = Math.trunc(number / 10);
// let b = number % 10;
// console.log(a + b * 10);
// ===================================================================
// const number = 87;
// let a = Math.trunc(number / 10);
// let b = number % 10;
// console.log(a * b);
// ===================================================================
// const year = 2024;
// let a = year % 4;
// let b = year % 400;
// let c = year % 100;
// if (a === 0 && c !== 0 || b === 0) {
//   console.log("Өндөр жил")
// } else {
//   console.log("Өндөр жил биш")
// }
// ===================================================================
// const elapsed = Date.now();
// console.log(elapsed);

// const msPerYear = 1000 * 60 * 60 * 24 * 30 * 12;
// const msPerMonth = 1000 * 60 * 60 * 24 * 30;
// const msPerDay = 1000 * 60 * 60 * 24;
// const msPerHour = 1000 * 60 * 60;
// const msPerMin = 1000 * 60;
// const msPerSec = 1000 ;
// const msPerDoil = 10;
// let uldegdel = elapsed;

// const year = Math.trunc(uldegdel / msPerYear);  
// uldegdel %= msPerYear;
// const month = Math.trunc(uldegdel / msPerMonth);
// uldegdel %=  msPerMonth;
// const day = Math.trunc(uldegdel / msPerDay);
// uldegdel %= msPerDay;
// const hour = Math.trunc(uldegdel / msPerHour);
// uldegdel %=  msPerHour;
// const min = Math.trunc(uldegdel / msPerMin);
// uldegdel %=  msPerMin;
// const sec = Math.trunc(uldegdel / msPerSec);
// uldegdel %= msPerSec;
// const doil = Math.trunc(uldegdel / msPerDoil);
// uldegdel %=  msPerDoil;

// console.log(`${year} жил, ${month} сар, ${day} өдөр, ${hour} цаг, ${min} минут, ${sec} секунд, ${doil} дойл, ${uldegdel} миллисекунд`);
// ===================================================================
// const a = 7;
// const b = 4;
// const c = -8;
// if (a < b && a < c) {
//   console.log(a);
// } else if (b < a && b < c) {
//   console.log(b);
// } else {
//   console.log(c);
// } 
// ===================================================================
// const a = 100;
// const b = 47;
// const c = 88;
// if (a > b && a > c && b < c) {
//   console.log(a - b);
// } else if (a > b && a > c && b > c) {
//   console.log(a - c);
// } else if (b > a && b > c && a > c) {
//   console.log(b - c);
// } else if (b > a && b > c && a < c) {
//   console.log(b - a);
// } else if (c > a && c > b && a < b) {
//   console.log(c - a);
// } else {
//   console.log(c - b);
// }