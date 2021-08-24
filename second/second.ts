// 인터페이스 확장하기(Extending Interfaces)
// 클래스처럼, 인터페이스들도 확장이 가능하다.
// 이는 한 인터페이스의 멤버를 다른 인터페이스에 복사하는 것을 가능하게 해주는데,
// 인터페이스를 재사용성 높은 컴포넌트로 쪼갤 때, 유연함을 제공해준다.
interface Shape {
    color : string;
}

interface Square extends Shape {    // 이게 확장하는 것
    sideLength : number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;

// 인터페이스는 여러 인터페이스를 확장할 수 있어, 모든 인터페이스의 조합을 만들어낼 수 있습니다.

interface Shape2 {
    color : string;
}

interface PenStroke2 {
    penWidth : number;
}

interface Square2 extends Shape2, PenStroke2 {
    sideLength : number;
}

let square2 = {} as Square2;
square2.color = "blue";
square2.sideLength = 10;
square2.penWidth = 5.0;

