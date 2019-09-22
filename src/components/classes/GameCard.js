class GameCard {
	constructor(value, position) {
		this.value = value;
		this.position = position; //not using 
		this.isMatched = false;
		//TODO need img path
	}

	//TODO validate function

	NewDeck = function NewDeck() {
		var playCards = [];
		var i = 0;
		var playNo = 12; //only allow even number of cards
		for (var i = 0; i <= playNo; i++) {
			if (i <= playNo / 2) {
				playCards.push(new GameCard(i, i))
			} else {
				let j = playNo / 2;
				playCards.push(new GameCard(i - j, i))
			}
		}
		return playCards;
	}

	ShuffledDeck = function shuffle(array) {		//var array = NewDeck();
		var currentIndex = array.length, temporaryValue, randomIndex;
		// While there remain elements to shuffle...		while (0 !== currentIndex) {
			// Pick a remaining element...			randomIndex = Math.floor(Math.random() * currentIndex);			currentIndex -= 1;
			// And swap it with the current element.			temporaryValue = array[currentIndex];			array[currentIndex] = array[randomIndex];			array[randomIndex] = temporaryValue;		}
		return array;	}
}