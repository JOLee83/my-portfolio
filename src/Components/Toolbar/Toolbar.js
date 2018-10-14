import React from 'react'

import MenuToggleButton from '../SideMenu/MenuToggleButton'

const toolbar = props => (
	<header>
		<div className="my-name">Justin Oliver Lee</div>
		<div className="spacer" />
		<div className="button-div">
			<MenuToggleButton click={props._menuToggleClick} />
		</div>
	</header>
)
export default toolbar
