var num = 10;
console.log("num : " + num );
if(num % 2 == 0) {
    console.log("num은 짝수입니다.");
}
else{
    console.log("num은 홀수입니다.");
}

var id = prompt("id를 입력하세요."); //prompt는 팝업창을 띄우는데 입력을 할 수 있도록
if(id == "green") {
    var pw = prompt("비밀번호를 입력하세요.");
    if(pw=="green"){
        alert("로그인에 성공했습니다.");
    }
    else{ // 아이디는 맞았지만 pw가 틀렸을 때
        alert("비밀번호를 잘못 입력했습니다.")
    }
}
else{ // id가 green이 아니면
    alert("아이디를 잘못 입력했습니다.");
}