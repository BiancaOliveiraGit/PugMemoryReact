import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

export default function Card({ solved, disabled, handleClick, id, flipped, type, height, width }) {
	return <div
			className={`flip-container ${flipped ? 'flipped' : ''}`}
			style={{
				width, height
			}}
		onClick={() => disabled ? null : handleClick(id)}
			>
			<div className="flipper">
			<img
				style={{
					height, width
				}}
				className={flipped ? 'front' : 'back'}
				src={flipped || solved ? `/images/${type}` : '/images/pugBack.png'}
				alt="pugCard"
				/>
			</div>
	</div>

}

Card.propTypes = {
	solved: PropTypes.bool.isRequired,
	disabled: PropTypes.bool.isRequired,
	handleClick: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired,
	flipped: PropTypes.bool.isRequired,
	type: PropTypes.string.isRequired,
	height: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
}