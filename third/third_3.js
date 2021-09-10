// this 매개변수 (this parameter)
// this는 독립형 함수에서는 사용이 불가능하다. 즉 가짜 매개변수라는 뜻
function f() {
    // 독립형 함수에서 'this'를 사용할 수 없는 것을 확인함.
}
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // 밑에 들어오는 함수들은 callee가 반드시 Deck 타입이어야 함을 명시적으로 지정하는 코드
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: _this.suits[pickedSuit],
                card: pickedCard % 13
            };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
alert("card : " + pickedCard.card + " of " + pickedCard.suit);
// 이제 typesciprt는 createCardPicker가 Deck 객체에서 호출 된다는 것을 알게 됬다.
// 이제는 this가 any 타입이 아니라 Deck 타입이며 오류가 발생하지 않게된다.
