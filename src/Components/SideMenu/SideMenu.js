import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const sideMenu = props => (
	<nav className="side-menu">
		<ul>
			<li>
				<Link to="/" onClick={props.click}>
					About Me
				</Link>
			</li>
			<li>
				<Link to="/portfolio" onClick={props.click}>
					Portfolio
				</Link>
			</li>
			<li>
				<Link to="/contactme" onClick={props.click}>
					Contact Me
				</Link>
			</li>
		</ul>
	</nav>
)

export default sideMenu
