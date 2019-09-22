import React from 'react'
import PropTypes from 'prop-types'
import Card from '../card'
import './styles.css'

export default function Board({ solved, disabled, dimension, cards, flipped, handleClick }) {
	return (
		<div className='board'>
		{
			cards.map((card) => (
					<Card
						key={card.id}
						id={card.id}
						type={card.type}
						width={dimension / 4.5} //{card.width}
						height={dimension / 4} //{card.height}
						back={card.back}
						front={card.front}
						flipped={flipped.includes(card.id)}
						handleClick={handleClick}
						solved={solved.includes(card.id)}
						disabled={disabled || solved.includes(card.id)}
						
				/>
		))}
		</div>
		)
}

Board.propTypes = {
	solved: PropTypes.arrayOf(PropTypes.number).isRequired,
	dimension: PropTypes.number.isRequired,
	disabled: PropTypes.bool.isRequired,
	cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
	handleClick: PropTypes.func.isRequired,
}