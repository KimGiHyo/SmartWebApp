var str = new String('Hello world');
console.log(str);
console.log("str length : " + str.length);

//한 글자 확인
console.log("str[0] : " + str[0]);
console.log("str.charAt(0) : " + str.charAt(0));

//모두 대문자로
console.log("str.toUpperCase() : " + str.toUpperCase());

//모두 소문자로
console.log("str.toLowerCase : " + str.toLowerCase());

//문자열 찾기
console.log("str.indexOf(\'wo\') : " + str.indexOf('wo'));
console.log("str.indexOf(\'ab\') : " + str.indexOf('ab'));
console.log("str.indexOf(\'wo\,7') : " + str.indexOf('wo',7));

var str2 = new String("abcdefgabcdabcdabcabca");

function findPoint(str) {
    var arr = new Array();
    for(var i=0; i <str.length; i++) {
        if(str.indexOf('ab',i) >= 0){
            arr.push(str.indexOf('ab',i));
            i = str.indexOf('ab',i);
        }
    }
    return arr;
}
var arr2 = new Array();
arr2 = findPoint(str2);
console.log(arr2);


var str3 = new String("ab");
function indexOfs(str2, str3) {
    var index = 0;
    var arr = new Array();
    while(true) {
        index = str2.indexOf(str3,index);
        console.log(index);
        if(index == -1)
            break;
        arr.push(index);
        index = index + str3.length;
    }
    return arr;
}
var res = indexOfs(str2, str3);
console.log(res.join(", "));

// lastIndexOf
console.log("str2.lastIndexOf(str3) : " + str2.lastIndexOf(str3));

//search
console.log("str2.search(str3) : " + str2.search(str3));

//substr
console.log("str2.substr(0,5) : " + str2.substr(1,5));

//substring
console.log("str2.substr(0,5) : " + str2.substring(1,5));

//slice
console.log("str2.slice(1,5) : " + str2.slice(1,5));

console.log("str2.substr(0,5) : " + str2.substring(1,-1));
console.log("str2.slice(1,5) : " + str2.slice(1,-1));

//split
var str4 = "2018.06.04";
var str5 = str4.split('.');
var year = str5[0];
var month = str5[1];
var day = str5[2];
console.log(str4 + " : " + year + "년 " + month + "월 " + day + "일 ");