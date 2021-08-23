// 클래스 타입
// 인터페이스 구현하기
// 클래스가 특정 계약(contract)을 충족시키도록 명시적으로 하는 것은 C#, JAVA와 마찬가지로 Typescript에서도 가능하다.
interface ClockInterface {
    currentTime : Date;
}

class Clock implements ClockInterface {
    currentTime : Date = new Date();
    constructor(h : number, m : number){}
}

//setTime 처럼 클래스에 구현된 메서드를 인터페이스 안에서도 기술이 가능하다.
interface ClockInterface2 {
    currentTime : Date;
    setTime(d : Date) : void;
}

class Clock2 implements ClockInterface2 {
    currentTime : Date = new Date();
    setTime(d : Date) {
        this.currentTime = d;
    }
    constructor(h : number, m : number) {}
}

// 인터페이스는 클래스의 public과 private 모두보다는 public를 기술합니다. 그래서 클래스 인스턴스의 private에서는 특정 타입이
// 있는지 없는지를 검사할 수 없습니다.


//클래스의 스태틱과 인스턴스의 차이점(Difference between ths static and instance sides of classes)
// 클래스와 인터페이스를 다룰 때, 클래스의 2 가지 타입을 가진다는 것을 기억하는게 좋다.
// 스태틱 타입과 인스턴스 타입인데, 생성 시그니처로 인터페이스를 생성하고, 클래스를 생성하려고 한다면,
// 인터페이스를 implements 할 때 에러가 발생하는 것을 확인할 수 있다.
interface ClockConstructor {
    new (hour : number, minute : number);
}

//class Clock3 implements ClockConstructor {
//    currentTime : Date;
//    constructor(h : number, m : number){}
//}

// 클래스가 인터페이스를 implements할 때, 클래스의 인스턴스만 검사하기 때문이다.
// 생성자가 스태틱이기 때문에, 이 검사에 포함되지 않는다.
// 대신에, 클래스의 스태틱 부분을 직접적으로 다룰 필요가 없다.
// 밑의 예제에서 ClockConstructor는 생성자를 정의하고 ClockInterface는 인스턴스 메서드를 정의하는 두 인터페이스를 정의한다.
// 편의를 위해 전달된 타입의 인스턴스를 생성하는 createClock 생성자 함수를 정의한다.

interface ClockConstructor2 {
    new (hour : number, minute : number) : ClockInterface3;
}

interface ClockInterface3 {
    tick() : void;
}

function createClock(ctor : ClockConstructor2, hour : number, minute : number) : ClockInterface3 {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface3 {
    constructor(h : number, m : number) { }
    tick() {
        console.log("beep beep");
    }
}

class AnalogClock implements ClockInterface3 {
    constructor(h : number, m : number){ }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);