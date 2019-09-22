function shuffle(array) {
	const _array = array.slice(0)
	for (let i = 0; i < array.length - 1; i++) {
		let randomIndex = Math.floor(Math.random() * (i + 1))
		let temp = _array[i]
		_array[i] = _array[randomIndex]
		_array[randomIndex] = temp
	}
	return _array
}

export default function initializeDeck() {
	let id = 0
	//these are the cards.  use push twice because want two of the same type
	//TODO later my code for deck of 12 pug cards
	const cards = ['pug1.jpg', 'pug2.jpg', 'pug3.jpg', 'pug4.jpg', 'pug5.jpg', 'pug6.jpg'
	].reduce((acc, type) => {
		acc.push({
			id: id++,
			type,
		})
		acc.push({
			id: id++,
			type,
		})
		return acc
		}, [])

	return shuffle(cards);
}