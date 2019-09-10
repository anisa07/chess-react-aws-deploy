import React from 'react'

export default function Square ({ black, children }) {
	const fill = black ? 'black' : 'white';

	return (<div className='square' style={{ backgroundColor: fill }}>
		{children}
	</div>)
}
