//소수인지 판별하는 예제

var num = 5;
var i = 1;
var count = 0;

for(i = 1; i<=num; i++) {
    if(num%i == 0) {
        count++;
    }
}
if(count==2){
    console.log(num + "은 소수입니다.");
}

var arr = [100,200,300];
var sum = 0;

for(items in arr) {
    sum += arr[items];
}
console.log(arr.join("+") + "=" + sum);


var arr2 = {A:10, B:20, C:30};
for(items in arr2) {
    console.log("key : " + items + ", value : " + arr2[items])
}

console.log(arr2);

var a = 20;
var b = 150;

var compare = 0;

for(var i=0; i<=a; i++) {
    if(a%i ==0) {
        if(b%i ==0){
            compare = i;
        }
    }
}
console.log(compare);