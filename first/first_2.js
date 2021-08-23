function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare);
//선택적 프로퍼티의 이점은 인터페이스에 속하지 않는 프로퍼티의 사용을 방지하면서, 사용 가능한 속성을 기술하는 것입니다.
//예를들어, createSquare안의 color 프로퍼티 이름을 잘못 입력하면, 오류 메시지로 알려줍니다.
// Error: Property 'clor' does not exist on type 'SquareConfig' << 이 메시지가 출력된다.
