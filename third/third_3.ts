// this 매개변수 (this parameter)
// this는 독립형 함수에서는 사용이 불가능하다. 즉 가짜 매개변수라는 뜻
function f(this : void) {
    // 독립형 함수에서 'this'를 사용할 수 없는 것을 확인함.
}

// 명확하게 하기 위해 추가 예를 들어보자
interface Card {
    suit : string;
    card : number;
}

interface Deck {
    suits : string[];
    cards : number[];
    createCardPicker(this : Deck) : () => Card;
}

let deck : Deck = {
    suits : ["hearts", "spades", "clubs", "diamonds"],
    cards : Array(52),
    // 밑에 들어오는 함수들은 callee가 반드시 Deck 타입이어야 함을 명시적으로 지정하는 코드
    createCardPicker : function(this : Deck) {
        return () => {
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

alert("card : " + pickedCard.card + " of " + pickedCard.suit);

// 이제 typesciprt는 createCardPicker가 Deck 객체에서 호출 된다는 것을 알게 됬다.
// 이제는 this가 any 타입이 아니라 Deck 타입이며 오류가 발생하지 않게된다.