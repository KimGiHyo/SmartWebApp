function getGrade(num) {
    var grade = 'F';
    if(num >= 90) {
        grade = 'A';
        return grade;
    }
    else if(num < 90 && num >=80){
        grade = 'B';
        return grade;
    }
    else if(num<80 && num >=70) {
        grade = 'C';
        return grade;
    }
    else if(num<70 && num>=60) {
        grade = 'D';
        return grade;
    }
    else
        return grade;
}

var num = parseInt(prompt("성적을 입력하세요"));
var grade = getGrade(num);

console.log("입력한 성적의 등급은" + grade + "입니다.");