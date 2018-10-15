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
			<li>
				<a href="./Justin_Oliver_Lee_Resume.pdf" target="_blank">
					Resume
				</a>
			</li>
			<span>
				<i className="fas fa-mobile-alt" />
				<i className="fas fa-envelope" />
				<i className="fab fa-linkedin" />
				<i className="fab fa-github" />
				<i className="fab fa-slack" />
			</span>
		</ul>
	</nav>
)

export default sideMenu
