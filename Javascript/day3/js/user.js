function Student(name, grade, clas, number) {
    this.name = name;
    this.grade = grade;
    this.class = clas;
    this.number = number;
    this.toString = function() {
        return new String("이름 : " + this.name + ", 학년 : " + this.grade + ", 반 : " + this.class
        + ", 번호 : " + this.number);
    }
}

var std1 = new Student('홍길동', 1, 1, 10);
console.log(std1.toString());

var std2 = new Student();
std2.name = "김기효";
std2.grade = 1;
std2.class = 1;
std2.number = 10;
std2.sayHello = function() {
    return "Hello";
}
console.log(std2.toString());

Student.prototype.sayHi = function() {
    return "Hi";
}

var ts = std2.toString();
var subts = ts.split(', ');
// ts == subts.join(', ')
var res = new Array();
for(var i in subts) {
    var tmp = subts[i].split(' : ');
    res.push(tmp[0]);
}
console.log(res.join(' and '));