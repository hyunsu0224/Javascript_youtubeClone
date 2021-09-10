// this
// this와 화살표 함수(Arrow function)
// JS에서 this는 함수가 호출될 때 정해지는 변수이다.
// 예문
/*
let deck = {
    suits : ["hearts", "spades", "clubs", "diamonds"],
    cards : Array(52),
    createCardPicker : function() {
        return function() {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {
                suit : this.suits[pickedSuit],
                card : pickedCard % 13
            };
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);
*/
// 위 내용을 실행하면 오류가 발생하는데, 그 이유는 let cardPicker에서의 deck.createCardPicker() 내부의 this가 deck을 지칭하는 것이아니라
// window를 지칭하기 때문에 변수를 불러오질 못하면서 오류가 발생한다.
//때문에 위 소스를 수정하도록하면
var deck2 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
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
var cardPicker2 = deck2.createCardPicker();
var pickedCard2 = cardPicker2();
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
