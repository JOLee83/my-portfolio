import React from 'react'
import { Link } from 'react-router-dom'

const sideMenu = props => (
	<nav className="side-menu">
		<ul>
			<li>
				<Link to="/" onClick={props.click}>
					<i className="fas fa-home" />
					About Me
				</Link>
			</li>
			<li>
				<Link to="/portfolio" onClick={props.click}>
					<i className="fas fa-briefcase" />
					Portfolio
				</Link>
			</li>
			<li>
				<Link to="/contactme" onClick={props.click}>
					<i className="fas fa-address-book" />
					Contact Me
				</Link>
			</li>
			<li>
				<Link to="/resume" onClick={props.click}>
					<i className="fas fa-file" />
					Resume
				</Link>
			</li>
		</ul>
	</nav>
)

export default sideMenu
