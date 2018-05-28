var i = 1;
var sum = 0;
while(i<=10) {
    // console.log("i : " + i);
    sum += i;
    i++;
}
console.log(sum);
i = 11;
sum = 0;
do {
    console.log("i: " + i);
    i++;
    sum =+ i;
}while(i <= 10);

console.log