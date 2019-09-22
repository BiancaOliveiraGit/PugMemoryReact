//footer
import React from 'react'
import './styles.css'

export default function Footer({ newGame }) {
	return (
		<div className="footer-newgame">
			<button className="footer-button" onClick={newGame}>
				New Game
			</button>			
		</div>
		)
}