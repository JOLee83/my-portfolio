import React from 'react'

const RightArrow = props => {
	return (
		<div className="nextArrow" onClick={props.nextSlide}>
			<i className="fas fa-angle-right" title="Next" />
		</div>
	)
}

export default RightArrow
