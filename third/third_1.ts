// <나머지 매개변수> Rest Parameters
// 필수, 선택적, 기본 매개변수는 한 번에 하나의 매개변수만을 가지고 이야기한다.
// 때로는 다수의 매개변수를 그룹지어 작업하기를 원하거나, 함수가 최종적으로 얼마나 많은 매개변수를 취할지 모를 때도 있을것이다.
// Javascript에서는 모든 함수 내부에 위치한 arguments라는 변수를 사용해 직접 인자를 가지고 작업할 수 있다.

//Type Script에서는 이 인자들을 하나의 변수로 모을 수 있다.
function buildName(firstName : string, RestName : string[]) {
    return firstName + RestName.join(" ");
}

// employeeName은 "Joseph Samuel Lucas MacKinzie"로 지정할 것이다.
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

// 나머지 매개변수는 선택적 매개변수들의 수를 무한으로 취급합니다.  나머지 매개변수로 인자들을 넘겨줄 때는
// 당신이 원하는만큼 넘겨 줄수도 있습니다. 또는 아무것도 안넘길수도 있다.
// 컴파일러는 생략 부호 뒤의 이름으로 전달된 인자 배열을 빌드하여 함수에서 사용할 수 있도록 합니다.
// 생략 부호는 나머지 매개변수가 있는 함수의 타입에서도 사용된다.

function buildName2(firstName : string, RestName : string[]) {
    return firstName + RestName.join(" ");
}

let buildNameFun : (fname : string, rest : string[]) => string = buildName2;