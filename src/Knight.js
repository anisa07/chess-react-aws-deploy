import React from 'react'
import { ItemTypes } from './Constants'
import { useDrag } from 'react-dnd'
import { BlackKnight, WhiteKnight } from './assets/index';

export default function Knight ({ black }) {
	const pic = black ? BlackKnight : WhiteKnight;
	const [{ isDragging }, drag] = useDrag({
		item: { type: ItemTypes.KNIGHT },
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
	});

	return (<span ref={drag}
	              style={{
		              opacity: isDragging ? 0.1 : 1,
		              cursor: 'move',
	              }}><img src={pic}/></span>)
}
