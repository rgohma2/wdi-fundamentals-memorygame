const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
const cardsInPlay = [];
function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
		} else {
			console.log("Sorry, not a match.");
		};
	};
};
function flipCard(cardsId) {
	console.log("User flipped " + cards[cardsId].rank);
	cardsInPlay.push(cards[cardsId].rank);
	checkForMatch();
	console.log(cards[cardsId].suit);
	console.log(cards[cardsId].cardImage);
};
flipCard(0);
flipCard(2);



