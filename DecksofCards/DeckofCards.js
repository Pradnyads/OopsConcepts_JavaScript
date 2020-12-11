/********************************************************************************
 * @problem : Write a program using array to distribute cards amongst 4 players
 * @fileName : DeckofCards.js
 * @Auther  : Pradnya D. S.
 /*******************************************************************************/

//Class is defined for methods to shuffle cards
class cards {
  constructor() {
    this.suit = ["Spades", "Diamonds", "Clubs", "Hearts"];
    this.rank = ["Ace","2","3","4","5","6","7","8","9","10","J","Q","K"];
  }
}
/* @description: deckCard() is used to take cards and shuffle them to distribute amongst players
 * @purpose: it reads  array data from deck of cards 
 */
class deckCard extends cards {
  deckOfCards() {
    let shfulledCard = new Array(4);
    let uniqueCard = new Array();
    for (let k = 0; k < shfulledCard.length; k++) {
      shfulledCard[k] = new Array(9);
    }

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 4; j++) {
        let indexofSuit = Math.round(Math.random() * 10) % 4;
        let indexofRank = Math.round(Math.random() * 10) % 13;
        let card = this.suit[indexofSuit] + this.rank[indexofRank];
        if (uniqueCard.includes(card)) {
          j--;
        } else {
          uniqueCard.push(card);
          shfulledCard[j][i] = card;
        }
      }
    }
    console.log("\n 4 players have cards : ");
    console.log(shfulledCard);
  }
}
//Object is defined of child class
let game = new deckCard();
game.deckOfCards();
