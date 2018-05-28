var number1 = 1/0;
var number2 = -1/0;
var number3 = 10;

console.log("number1" + number1);
console.log("number2" + number2);
console.log("is finite number1 :" + isFinite(number1));
console.log("is finite number2 :" + isFinite(number2));
console.log("is finite number3 :" + isFinite(number3));

var number4 = "10";
console.log("is NaN number4: " + isNaN(number4)); //javascript는 var에 다 넣을 수 있기 떄문에, 숫자인지 아닌지를 판별하는게 필요함