
import React, { useState, useEffect } from 'react'
import Board from './components/board'
import initializeDeck from './deck'
import NavBar from './components/nav'
import Footer from './components/footer'


export default function App() {
	const [cards, setCards] = useState([])
	const [flipped, setFlipped] = useState([])
	const [dimension, setDimension] = useState(300)
	const [solved, setSolved] = useState([])
	const [disabled, setDisabled] = useState(false)

	useEffect(() => {
		resizeBoard()
		setCards(initializeDeck())
	}, [])

	useEffect(() => {
		const resizeListener = window.addEventListener('resize', resizeBoard)
		return () => window.removeEventListener('resize', resizeListener)
	})

	useEffect(() => {
		preloadImages()
	},cards)

	const handleClick = (id) => {
		setDisabled(true)
		if (flipped.length === 0) {
			setFlipped([id])
			setDisabled(false)
		} else {
			if (sameCardClicked(id)) return //TODO fix when user clicks same card - timeout allow game to play
			setFlipped([flipped[0], id])

			if (isMatch(id)) {
				setSolved([...solved, flipped[0], id])
				resetCards()
			} else {
				setTimeout(resetCards, 1300)
			}
		}	
	}

	const preloadImages = () => {
		cards.map((card) => {
			const scr = `/images/${card.type}.jpg`
			new Image().scr = scr
		})
	}

	const sameCardClicked = (id) => flipped.includes(id) //arrow function returns true if includes

	const resetCards = () => {
		setFlipped([])
		setDisabled(false)
	}

	const isMatch = (id) => {
		const clickedCard = cards.find((card) => card.id === id)
		const flippedCard = cards.find((card) => flipped[0] === card.id)
		return flippedCard.type === clickedCard.type
	}

	const resizeBoard = () => {
		setDimension(Math.min(
			document.documentElement.clientWidth,
			document.documentElement.clientHeight,
		),
		)
	}

	const newGame = () => {
		setFlipped([])
		setSolved([])
		setCards(initializeDeck())
	}

	return (
		<div>
			<NavBar />
			<div className="App-header">
				<h1 > Lost And Found Pugs </h1>	
				<h3> A Game of Memory </h3>
			</div>
			
			<Board
				dimension={dimension}
				cards={cards}
				flipped={flipped}
				handleClick={handleClick}
				solved={solved}
				disabled={disabled}
				/>
			
			<Footer 
				newGame = {newGame}
			/>
		</div>

	)

}
//class App extends Component {
//	state = {
//		//contactsData: []
//		//,
//		cardDeck: []
//	}

//	//componentDidMount() {
//	//	fetch('http://jsonplaceholder.typicode.com/users')
//	//		.then(res => res.json())
//	//		.then((data) => {
//	//			this.setState({ contactsData: data })
//	//		})
//	//		.catch(console.log)
//	//}

//	//render() {
//	//	return (
//	//		<Contacts contacts={this.state.contactsData} />
// //       );
//	//}
//	render() {
//		return (
//			//<Game />
//		//<Contacts />
//			<Memory />
//		)
//	};
//}

//export default App;


//just WIP
/*
class GameCard {
	constructor(value, position) {
		this.value = value;
		this.position = position;
		this.isMatched = false;
	}
};

var playCards = [];
var i = 0;
var playNo = 12; //only allow even number of cards
for (var i = 0; i <= playNo; i++) {
	if (i <= playNo / 2) {
		playCards.push(new GameCard(i, i))
	} else {
		let j = playNo / 2;
		playCards.push(new GameCard(i - j , i))
	}
}

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}
// Used like so
var arr = [2, 11, 37, 42];
arr = shuffle(arr);
console.log(arr);
*/
