import React, { Component } from 'react'
import GameCard from './classes/GameCard'


class Game extends Component {
	state = {
		cardDeck: []
	}

	//todo move functions out of component
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

	componentDidMount() {
		//get a fresh deck of card
		let freshdeck = this.NewDeck();
		this.setState({ cardDeck: freshdeck });
		//shuffle deck
		//set state

		//fetch('http://jsonplaceholder.typicode.com/users')
		//	.then(res => res.json())
		//	.then((data) => {
		//		this.setState({ contactsData: data })
		//	})
		//	.catch(console.log)
	}

	render() {
		return (
			<div>
				<center><h1>Memory Game</h1></center>
				{this.state.cardDeck.map((card,index) => (
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">{card.value}</h5>
							<h6 className="card-subtitle mb-2 text-muted">{index}</h6>
						</div>
					</div>
				))}
			</div>
		);
	}
}
export default Game
//export default Contacts