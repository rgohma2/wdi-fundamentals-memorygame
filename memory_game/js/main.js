const cards = ["queen", "queen", "king", "king"];
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
	console.log("User flipped " + cards[cardsId]);
	cardsInPlay.push(cards[cardsId]);
	checkForMatch();
};
flipCard(0);
flipCard(2);



