// 하이브리드 타입(Hybrid Types)
// 인터페이스에는 다양한 타입을 기술할수가 있다.
// javascript의 동적이고 유연한 특성 때문에, 위에서 설명했던 몇몇 타입의 조합으로 동작하는 객체를 만들수있다.
interface Counter {
    (start : number) : string;
    interval : number;
    reset() : void;
}

function getCounter() : Counter {
    let counter = (function (start : number) { }) as Counter;
    counter.interval = 123;
    counter.reset = function() { };
    return counter;
}

let c = getCounter();   //c라는 값으로 이제 값들을 입력해준다.
c(10);
c.reset();
c.interval = 5.0;

console.log(c.interval);    // 5가 출력된다.

// 클래스를 확장한 인터페이스 (Interfaces Extending Classes)
// 인터페이스 타입이 클래스 타입을 확장하면, 클래스의 멤버는 상속받지만 구현은 상속받지 않습니다.
// 이것은 인터페이스가 구현을 제공하지 않고, 클래스의 멤버 모두를 선언한 것과 마찬가지입니다.
// 인터페이스는 심지어 기초 클래스의 private과 protected 멤버도 상속을 받는다.
// 이것은 인터페이스가 private 혹은 protected 멤버를 포함한 클래스를 확장할 수 있다는 뜻이고,
// 인터페이스 타입은 클래스나 하위클래스에 의해서만 구현될 수 있다.
// 이는 큰 규모의 상속계층을 가지고 있을 때 유용하지만, 특정 프로퍼티를 가진 하위 클래스에서만 코드가 동작하도록 지정하는데도 유용하다.
// 하위 클래스는 기초 클래스에서 상속하는 것 외에는 관련이 있을 필요가 없다.
// 예)
// implement란, 구현하다라는 뜻
class Control {
    private state : any;
}

interface SelectableControl extends Control {       //여기에서는 class Control의 기능을 포함하고있다.
    select() : void;                                // state는 private 멤버이기 때문에 selectablecontrol를 구현하는 것은 control의 자식에게만 가능하다.
}                                                   // control의 자식만 같은 선언에서 유래된 state private 멤버를 가질수 있기 때문이고, private 멤버들이 호환되기 위해 필요하다.

class Button extends Control implements SelectableControl {         // Button과 TextBoX는 SelectableControl의 하위타입이지만
    select() { }                                                    // Control을 상속받고, select 메서드를 가지기 때문에 SelectableControl의 하위타입이다.
}

class TextBox extends Control {
    select() { }
}

// Error : Property 'state' is missing in type 'Image'.
// class Image implements SelectableControl {                  //다만 image는 control을 상속받고 있지 않고
//     private state : any;
//     select() { }
// }
// 
// class Location {                        // Location은 control을 상속받지도 않고 selectablecontrol의 하위타입도 아니다. 그리고 select 메서드를 포함하고 있지 않기때문에 
// 
// }
