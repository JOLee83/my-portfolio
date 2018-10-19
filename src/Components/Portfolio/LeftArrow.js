import React from 'react'

const LeftArrow = props => {
	return (
		<div className="backArrow" onClick={props.prevSlide}>
			<i className="fas fa-angle-left" title="Back" />
		</div>
	)
}

export default LeftArrow
