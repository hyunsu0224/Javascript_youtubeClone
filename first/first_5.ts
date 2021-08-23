// 인덱서블 타입(Indexable Types)
// 인터페이스로 함수 타입을 설명하는 방법과 유사하게, a[10]이나 ageMap["daniel"] 처럼 타입을 "인덱스로 기술이 가능하다.
// 인덱서블 타입은 인덱싱 할 때 해당 반환 유형과 함께 객체를 인덱싱하는데 사용할 수 있는 타입을 기술하는 인덱스 시그니처를 가지고 있다.
interface StringArray {
    [index : number] : string;
}
let myArray : StringArray;
myArray = ["Bob", "Fred"];

let myStr : string = myArray[0];
console.log(myStr);

// 위에서 인덱스 서명이 있는 StringArray 인터페이스가 있다. 이 인덱스 서명은 StringArray가 number로 index(색인화)되면 string을 반환할 것을 나타낸다.

// 인덱스 서명을 지원하는 타입에는 2가지가 있다 (문자열, 숫자)
// 두 타입의 인덱서(indexer)를 모두 지원하는 것은 가능하지만, 숫자 인덱서에서 반환된 타입은 반드시 문자열 인덱서에서
// 반환된 타입의 하위 타입이어야합니다. 이 이유는 number로 인덱싱 할 때, Javascript는 실제로 객체를 인덱싱하기 전에
// string으로 변환하기 때문입니다.
// 즉, 100(number)로 인덱싱하는 것은 "100"(string)로 인덱싱하는 것과 같기 때문에, 서로 일관성 있어야합니다.

class Animal {
    name : string;
}

class Dog extends Animal {
    breed : string;
}

//오류 ! 숫자형 문자열로 인덱싱을 하면 완전히 다른 타입의 Animal을 얻게 될것이다.
interface NotOkay {
//    [x : number] : Animal;
    [x : string] : Dog;
}

// 문자열 인덱스 시그니처는 "사전" 패턴을 기술하는데 강력한 방법이지만, 모든 프로퍼티들이 반환 타입과 강제로 일치하도록 한다.
// 문자열 인덱스가 obj.property 가 obj["property"]로도 이용 가능함을 알려주기 때문입니다.
// 다음 예제에서, name의 타입은 문자열 인덱스 타입과 일치하지 않고, 타입 검사는 에러를 발생시킵니다.
interface NumberDictionary {
    [index : string] : number; // 여기 써 있는 number가 인덱서
    length : number;
    //name : string;    // 오류, 'name'의 타입은 인덱서의 하위 타입이 아닙니다.
                        // 만약 [index : string] : number;  이부분을 string으로 변경한다면 오류가 사라진다.
}

// 인덱스의 할당을 막기 위해 인덱스 시그니처를 [읽기 전용]으로 만들 수 있다.
interface ReadonlyStringArray2 {
    readonly [index : number]: string;
}
let myArray2 : ReadonlyStringArray2 = ["Alice", "Bob"];
myArray2[2]  = "Mallory"; // 오류 발생!
// 인덱스 시그니처가 읽기 전용이기 때문에 myArray[2] 값을 할당 할수가 없다.
