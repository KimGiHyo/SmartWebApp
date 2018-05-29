
function divisor(number) {
    var arr = new Array();
    var count = 0;
    for(var i = 1; i<=number; i++) {
        if(number % i == 0){
            arr[count] = i;
            count++;
        }
    }
    return arr;
}
var number = parseInt(prompt("수를 입력하세요"));
var arr = divisor(number);
console.log("arr.join() : " + divisor(number).join(","));

//약수의 합1
var sum = 0;
for(var i = 0; i<arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

//약수의 합2
var sum = 0;
for(index in arr){
    sum += res[index];
}
console.log(sum)

