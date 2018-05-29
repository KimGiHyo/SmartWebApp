function calculator(num1, num2, operator) {
    var res;
    if(operator == "+"){
        res = num1 + num2;
        return res;
    }
    else if(operator == "-") {
        res = num1-num2;
        return res;
    }
    else if(operator == "*"){
        res = num1*num2;
        return res;
    }
    else if(operator == "/"){
        res=num1/num2;
        return res;
    }
    else if(operator == "%"){
        res=num1%num2;
        return res;
    }
}
var num1 = parseInt(prompt("첫 번째 수를 입력하세요.")); 

var num2 = parseInt(prompt("두 번째 수를 입력하세요.")); 

var operator = prompt("연산자를 입력하세요.");
var res = calculator(num1,num2,operator);
console.log(res);