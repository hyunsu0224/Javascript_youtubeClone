// <선택적 매개변수와 기본 매개변수> Optional and Default Parameter
// TypeScript에서는 모든 매개변수가 함수에 필요하다고 가정한다.
// 이것은 null이나 undefined를 줄 수 없다는 걸 의미하는 것은 아니다.
// 대신 함수가 호출될 때, 컴파일러는 각 매개변수에 대해 사용자가 값을 제공했는지를 검사한다.
// 또한, 컴파일러는 매개변수들이 함수로 전달될 유일한 매개변수라고 가정한다.
// 요약하자면, 함수에 주어진 인자의 수는 함수가 기대하는 매개변수의 수와 일치해야 한다.

function buildName(firstName : string, lastName : string) {
    return firstName + " " + lastName;
}

// let result1 = buildName("Bob");              // 오류, 너무 적은 매개변수
// let result2 = buildName("Bob", "Adams", "Sr."); // 오류, 너무 많은 매개변수
let result3 = buildName("Bob", "Adams");        // 성공
console.log(result3);

// JavaScript에서는 모든 매개변수가 선택적이고, 사용자는 적합하다고 생각하면 그대로 둘 수는 있다.
// 하지만 값은 undefined가 된다.
// TypeScript에서도 선택적 매개변수를 원한다면 매개변수 이름 끝에 '?'을 붙임으로써 해결할 수 있다.
// 이름의 성을 선택적 매개변수로 하는 경우를 예로 들어보겠습니다.
function buildName2(firstName2 : string, lastName2? : string) {
    if (lastName2)
        return firstName2 + " " + lastName2;
    else
        return firstName2;
}

let result4 = buildName2("Bob");                    // 지금은 바르게 작동하는것처럼 보임
//let result5 = buildName2("Bob", "Adams", "Sr.");    // 오류
let result6 = buildName2("Bob", "Adams");           // 정확함

// 어느 선택적 매개변수든 반드시 매개변수 정의가 필요하다.
// lastName2 대신 firstName2를 선택적으로 하고싶다면 매개변수의 순서를 변경해야한다.
// TypeScript에서는 유저가 값을 제공하지 않거나 undefined로 했을 때에 할당될 매개변수의 값을 정해 놓을 수도 있다.
// 이것을 기본-초기화 매개변수라고 한다.
// 여기에서 lastName2의 값에 "Smith"라고 지정을 해보자
function buildName3(firstName3 : string, lastName3 = "Smith") {
    return firstName3 + " " + lastName3;
}

let result7 = buildName3("Bob");                 // 올바르게 동작, "Bob Smith"로 반환되어서 출력된다.
console.log(result7);
let result8 = buildName3("Bob", undefined);      // 동작 -> Bob Smith로 출력
console.log(result8);
//let result9 = buildName3("Bob", "Adams", ".Sr"); //오류, 너무 많음
let result10 = buildName3("Bob", "Adams");       //정확함
console.log(result10);

// 모든 필수 매개변수 뒤에 오는 기본-초기화 매개변수는 선택적으로 처리되며, 선택적 매개변수와 마찬가지로 해당 함수를 호출할 때 생략할 수 있다.
// 이는 선택적 매개변수와 뒤 따르는 기본 매개변수의 타입들이 공통성을 공유함을 의미한다.
// 그래서
function buildName4(firstName4 : string, lastName4? : string) {

}
// 과
function buildName5(firstName5 : string, lastName5 = "Smith") {

}
// 는 (firstName4 : string, lastName? : string) => string 이라는 공통된 타입을 공유한다.
// lastName의 기본값은 타입에서 사라지고 오직 선택적 매개변수라는 사실만 남긴다.
// 순수한 선택적 매개변수와는 다르게 기본-초기화 매개변수는 필수 매개변수 뒤에 오는 것이 강요되지 않는다.
// 만약 기본-초기화 매개변수가 필수 매개변수보다 앞에 오게 된다면 사용자가 명시적으로 undefined를 전달해 주어야 기본-초기화 매개변수를 볼수 있다.

