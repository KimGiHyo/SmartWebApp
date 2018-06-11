
var formTag = document.getElementById('formTag');
formTag.onsubmit = function(){
    //id가 usr인 객체를 가져와서 그 객체의 value를 id에 저장
    var id = document.getElementById('usr').value;
    var pwd = document.getElementById('pwd').value;
    var pwdConfirm = document.getElementById('pwdConfirm').value;
    var inforId = document.getElementById('inforId');
    var inforPwd = document.getElementById('inforPwd');
    var inforPwdConfirm = document.getElementById('inforPwdConfirm');
    inforId.style.display = 'none';
    inforPwd.style.display = 'none';
    inforPwdConfirm.style.display = 'none';

    var isOk = true;
    var idRegex = /^[a-zA-Z]\w{4,9}$/;
    var pwdRegex = /^(?=\w{8,20}$)\w*(\d[A-z]|[A-z]\d)\w*$/;

    //id의 길이가 0이면 / test()는 있으면 true 없으면 false를 반환
    if(id.length == 0 || !idRegex.test(id)){
        inforId.style.display = 'block';
        isOk = false;
    }
    if(pwd.length == 0 || !pwdRegex.test(pwd)){
        inforPwd.style.display = 'block';
        isOk = false;
    }
    if(pwd != pwdConfirm){
        inforPwdConfirm.style.display = 'block';
        isOk = false;
    }
    
    // 생년월일 유효성 검사
    var year = document.getElementById('year').value;
    var month = document.getElementById('month').value;
    var day = parseInt(document.getElementById('day').value); 
    var max = maxDay(month);
    inforBirth.style.display = 'none';
    if(year.length != 4) {
        inforBirth.innerHTML = "태어난 년도를 정확히 입력하세요.";
        inforBirth.style.display = 'block';
        isOk = false;
    } 
    else if(isNaN(parseInt(month))){
        inforBirth.innerHTML = "월을 선택해주세요";
        inforBirth.style.display = 'block';
        isOk = false;
    }
    else if(isNaN(day) || day < 1 || day > max) {
        inforBirth.innerHTML = "일을 정확히 입력해주세요.";
        inforBirth.style.display = 'block';
        isOk = false;
    }
    
    // 전화번호 유효성검사
    var number = document.getElementById('phone_number').value;
    // var phoneNumber = parseInt(number);
    var numberRegex = /^010\d{7,8}$/;
    if(!numberRegex.test(number)){
        inforNumber.style.display = 'block';
        isOk=false;
    }
    if(!isOk)
        return false;
}

function maxDay(month) {
    switch(month) {
        case'1': case'3': case'5': case'7': case'8': case'10': case'12':
            return 31;
        case'2': 
            return 28;
        default:
            return 30;
    }
}