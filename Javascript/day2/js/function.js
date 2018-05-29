//이건 실행됨. 함수 선언식과 표현식이 있는데 선언식이기 떄문에
console.log(add(10,20)); 

function add(num1, num2) {
    return num1+num2;
}

// 함수 표현식 방법으로 함수 생성
var add2 = function(num1,num2) {
    return num1+num2;
};
console.log("add(): " + add2(10,20));

function add3(num1,num2) {
    var res = num1+num2;
    console.log("add3() : " + res);
}
add(10,20);

// add4() : arguments 예제
function add4() {
    if(arguments.length == 1)
        return arguments[0];

    else if(arguments.length==0)
        return 0;

    else{
        var res = 0;
        for(var index in arguments) {
            res += arguments[index];
        }
        return res;
    }
}
console.log("add4() : "+ add4(1,2,3,4) );

// 콜백 함수 예제
var count = 1;
function sayHello() {
    console.log("callBack: Hello!!");
    count++;
}
setTimeout(sayHello,2000);
console.log("Callback method!!");

//변수의 렉시컬 환경 예제
var tmp = 20;
function lexicalTest() {
    console.log("tmp : " + tmp)
    var tmp = 10;
    console.log("tmp : " + tmp);
}
lexicalTest();

//내부함수 예제
function outer() {
    console.log("outer()");
    function inner() {
        console.log("outer() : inner()!");
    }
    inner();
}
function inner(){
    console.log("inner()!");
}
outer();
inner();

//클로저 예제
function outer1() {
    var count = 1;
    return function inner1() {
        console.log("count : " + count);
        count++;
    }
}
var closer = outer1();
closer();
closer();
closer();

// 클로저가 아닌 함수
function closerTest(){
    var count = 1;
    function closerInner() {
        console.log("count : " + count);
        count++;
    }
    closerInner();
}
closerTest();
closerTest();
closerTest();

//내장함수 eval() 예제
eval("var evalNum1=10, evalNum2=20");
console.log(add(evalNum1, evalNum2));

//내장함수 parseInt(), parseFloat()
var parseNum1 = parseInt("123");
console.log("parseInt = 123 :" + parseNum1);
parseNum1 = parseInt("12!3");
console.log("parseInt = 12!3 : " + parseNum1);
parseNum1 = parseInt("?123");
console.log("parseInt = "+ parseNum1);

var parseNum2 = parseFloat("123");
console.log("parseFloat = 123 :" + parseNum2);
parseNum2 = parseFloat("123.4");    
console.log("parseFloat = 12!3 : " + parseNum2);
parseNum2 = parseFloat("123,4");
console.log("parseFloat = "+ parseNum2);
parseNum2 = parseFloat("1e3");
console.log("parseFloat = 1e3" + parseNum2);
parseNum2 = parseFloat("123.4.5");
console.log("parseFloat = 123.4.5 : " + parseNum2);

//내장함수 Number() 예제 >> 숫자료 표현될 수 있는 것만 처리함. 문자가 포함되어 있으면 NaN 처리
var number = Number("123");
console.log("Number() number" + number);
number = Number("12?3");
console.log("Number(12?3)" + number);
number = Number("12.3");
console.log("Number(12.3)" + number);
number = Number("1e3");
console.log("Number(1e3)" + number);
number = Number("0xf");
console.log("Number(0xf)" + number);
number = Number("010");
console.log("Number(010)" + number);

//내장함수 String() 예제
var str = String(123);
console.log("String(123)" + str);
var str = String(12.3);
console.log("String(12.3)" + str);
var str = String(12,3);
console.log("String(12,3)" + str);
var str = String(true);
console.log("String(true)" + str);

//내장함수 encodeURIcomponent() / decodeURIcomponent() 예제


var uri = encodeURIComponent("https://www.naver.com/");
console.log("encodeURIComponent(https://www.naver.com/) : " + uri)
console.log("decodeURIcomponent("+uri+")" + decodeURIComponent(uri))