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