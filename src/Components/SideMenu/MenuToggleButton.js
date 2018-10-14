import React from 'react'

const menuToggleButton = props => (
	<button className="menubutton" onClick={props.click}>
		<i className="fas fa-bars" />
	</button>
)

export default menuToggleButton
