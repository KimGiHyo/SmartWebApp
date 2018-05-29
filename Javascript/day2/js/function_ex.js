
//로또 번호
function Lotto() {
    var arr = new Array();
    for(var i=0; i<6; i++) {
        var number = getRandom();
        arr[i] = number;

        for(var j=i-1; j>0; j--){
            if(arr[i]==arr[j]){
                arr[i] = getRandom();
                j++;
            }
        }
    }
    return arr;

    function getRandom() {
        var num = parseInt((Math.random()*45)+1);
        return num;
    }
}
var arr = Lotto();

// 로또 2
function getLotto() {
    var i;
    var tmp;
    var res = new Array();
    while(res.length < 6) {
        tmp = randomInt(1,45);
        i=0;
        while(i < res.length) {
            if(tmp == res[i])
                break;
            i++;
        }
        if(i == res.length)
        res.push(tmp);
    }
    return res;
}

function randomInt(min,max) {
    if(min > max) {
        var tmp = min;
        min = max;
        max = tmp;
    }
    return parseInt(Math.random()*(max-min+1)+min);
}
alert("로또 번호는 " + arr.join(" , ") + "입니다." + "\n"
        + "로또 번호2는 " + getLotto().join(", ") + "입니다." );



// function calculator(num1, num2, operator) {
//     var res;
//     if(operator == "+"){
//         res = num1 + num2;
//         return res;
//     }
//     else if(operator == "-") {
//         res = num1-num2;
//         return res;
//     }
//     else if(operator == "*"){
//         res = num1*num2;
//         return res;
//     }
//     else if(operator == "/"){
//         res=num1/num2;
//         return res;
//     }
//     else if(operator == "%"){
//         res=num1%num2;
//         return res;
//     }
// }
// var num1 = parseInt(prompt("첫 번째 수를 입력하세요.")); 

// var num2 = parseInt(prompt("두 번째 수를 입력하세요.")); 

// var operator = prompt("연산자를 입력하세요.");
// var res = calculator(num1,num2,operator);
// console.log(res);
