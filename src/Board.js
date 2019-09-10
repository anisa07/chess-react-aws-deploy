import React from 'react'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Knight from './Knight'
import { moveKnight, canMoveKnight } from './Game'
import BoardSquare from './BoardSquare'


function Board ({ knightPosition }) {
	const squares = [];
	for (let i = 0; i < 64; i++) {
		squares.push(renderSquare(i, knightPosition))
	}

	return (
		<div className='board'>
			{squares}
		</div>
	)
}

function renderSquare (i, knightPosition) {
	const x = i % 8;
	const y = Math.floor(i / 8);
	return (
		<DndProvider backend={HTML5Backend}>
			<div key={i} style={{ width: '12.5%', height: '12.5%' }}>
				<BoardSquare x={x} y={y}>
					{renderPiece(x, y, knightPosition)}
				</BoardSquare>
			</div>
		</DndProvider>
	)
}

function renderPiece (x, y, [knightX, knightY]) {
	if (x === knightX && y === knightY) {
		return <Knight/>
	}
}

export default Board
