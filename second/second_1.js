function getCounter() {
    var counter = (function (start) { });
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter(); //c라는 값으로 이제 값들을 입력해준다.
c(10);
c.reset();
c.interval = 5.0;
console.log(c.interval);
