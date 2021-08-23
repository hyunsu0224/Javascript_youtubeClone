// 함수 타입 function types
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
// 올바른 함수 타입 검사를 위해, 매개변수의 이름이 같을 필요는 없다. 예를 들어 아래와 같이 작성이 가능하다.
var mySearch2;
mySearch2 = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
// 함수 매개변수들은 같은 위치에 대응되는 매개변수끼리 한번에 하나씩 검사한다.
// 만약 타입을 전혀 지정하지 않고 싶다면, SearchFunc 타입의 변수로 직접 함수 값이 할당되었기 때문에 TypeScript의 문맥상 타이핑이
// 인수 타입을 추론할 수 있다.
// 아래 예제를 통해, 함수 표현의 반환 타입이 반환된다.
var mySearch3;
mySearch3 = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
// 에러가 발생하는 코드 => 함수 표현식이 숫자나 문자열을 반환했다면, 타입 검사는 반환타입이
// SearchFunc 인터페이스에 정의된 반화 타입과 일치하지 않는다는 에러를 발생시킵니다.
