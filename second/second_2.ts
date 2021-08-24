// <함수>
// 함수는 Javascript로 된 모든 애플리케이션에서의 기본적인 구성 요소
// Javascript 함수는 추상화 계층을 구축하거나 클래스 모방, 정보 은닉, 모듈에 대한 방법을 제공한다.
// TypeScript에는 클래스, 네임스페이스, 모듈이 있지만, 함수는 여전히 이 일을 어떻게 할 것인지를 설명하는데 있어서 핵심 역할을 수행합니다.
// TypeScript에서는 표준 Javascript 함수가 작업을 수월하게 하도록 몇가지 새로운 기능을 추가했다.

// TypeScript에서는 Javascript와 마찬가지로 기명함수와 익명함수를 만들수 있다.
// Javascript에서의 함수
// 기명 함수
// function add(x, y) {
//     return x + y;
// }
// 
// //익명 함수
// let myAdd = function(x, y) {
//     return x + y;
// }
// 이것들 이외에도 함수 바깥에 선언한 외부의 변수를 참조 할수도 있다. (이러한 변수를 캡처(capture)라고 한다.)

// <함수 타입> Function Types
// 함수의 타이핑 Typing the function
function add(x : number, y : number) : number {
    return x + y;
}

let myAdd = function(x : number, y : number) : number {
    return x + y;
}
// 각 파라미터와 함수 자신의 반환될 타입을 정해줄 수 있다. Typescript는 반환문을 보고 반환 타입을 파악할 수 있으므로 반환 타입을 생략할 수 있다.

// 함수 타입 작성하기 (Writing the function type)
// 함수에 타입을 붙혔으니, 이제 함수 타입들을 살펴보고 함수의 전체 타입을 작성해보자
let myAdd2 : (x : number, y : number) => number =
    function (x : number, y : number) : number {
        return x + y;
    }

// 함수의 타입은 매개변수의 타입과 반환 타입이 있다.
// 전체 함수 타입을 작성하고자 한다면 이 두 가지 타입이 필요하다.
// 매개변수 목록처럼 각 매개변수에 이름과 타입을 작성하자. (이름을 적는 이유는 가독성을 위해서이다.)
// 위의 코드 대신 다른 방식으로 작성을 해보자면
let myAdd3 : (baseValue : number, increment : number) => number =           //baseValue는 x가 되고, increment는 y가 된다.
    function (x : number, y : number) : number {
        return x + y;
    };

// 매개변수들의 타입들이 올바르게 나열되어 있다면 함수 타입에 이름을 붙이더라도 유효한 타입으로 간주한다.
// 두번째로 반환 타입인데, 매개변수 타입들과 반환 타입 사이에 '화살표 표기' => 를 써서 반환 타입을 분명히 할 수 있다.
// 만약 함수가 값을 반환하지 않는다면 비워두는 대신 void를 써서 표기를 한다.
// 참고로, 매개변수 타입과 반환 타입만이 함수 타입을 구성한다, 캡쳐된 변수(함수 외부에 지정한 타입)는 타입에 반영되지 않는다. 사실상 캡쳐된 변수는 함수의 숨겨진 상태의 일부이고 API를 구성하지 않는다.