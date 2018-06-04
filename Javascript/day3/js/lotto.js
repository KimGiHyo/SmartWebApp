function Lotto(){
    this.number = new Array();
    this.lotteryNumber = new Array();
    this.rank = -1;
    this.generateNumber = function(){
        this.number = this.createArrayNumber(1,45,6);
    };
    this.generateLotteryNumber = function(){
        this.lotteryNumber = this.createArrayNumber(1,45,7);
    }
    this.checkRank = function(){
        var count = this.getCount(this.number, this.lotteryNumber);
        if(count == 6) {
            thus.rank = 1;
        }
        else if(count == 5 && this.contain(this.number, this.lotteryNumber[this.lotteryNumber.length-1]) == true ){
            this.rank = 2;
        }
        else if(count == 5) {
            this.rank = 3;
        }
        else if(count == 4) {
            this.rank = 4;
        }
        else if(count == 3) {
            this.rank = 5;
        }
        else{
            this.rank = -1;
        }
    }

    this.contain = function(arr, num) {
        for(var i in arr) {
            if(arr[i] == num)
                return true;
        }
        return false;
    }
    // 두 배열에 일치하는게 몇 개인지(즉 당첨번호 몇 개 인지) 알기 위한 메소드
    this.getCount = function(arr1, arr2) {
        var count = 0;
        var min = arr1.length > arr2.length ? arr2.length : arr1.length; // 보너스 번호를 제외시키기 위해서
        for (var i = 0; i<min; i++) {
            if(this.contain(arr1, arr2[i]) == true)
            count ++;
        }
        return count;
    }

    //랜덤 수 뽑는 메소드
    this.randomInt = function(min, max){
        if(min > max){
            var tmp = min;
         min = max;
            max = tmp;
        }
        return parseInt(Math.random()*(max-min+1) + min);
    }
    // 랜덤 수의 배열 만드는 메소드
    this.createArrayNumber = function(min, max, count){
        var res = new Array();
        while(res.length < count){
            var i = 0;
            var tmp = this.randomInt(min,max);
        while(i < res.length){
            if(res[i] == tmp)
                break;
            i++;
        }
        if(i == res.length)
        res.push(tmp);
        }
        return res;
    }
}
var lotto1 = new Lotto();
lotto1.generateNumber();
lotto1.generateLotteryNumber();
console.log(lotto1.number);
console.log(lotto1.lotteryNumber);
lotto1.checkRank();
switch(lotto1.rank) {
    case 1:
        console.log("1등"); break;
    case 2:
        console.log("2등"); break;
    case 3:
        console.log("3등"); break;
    case 4:
        console.log("4등"); break;
    case 5:
        console.log("5등"); break;
    default:
        console.log("꽝");
} 