import React from 'react'

const sideMenuOut = () => (
	<nav className="side-menu-out">
		<ul>
			<li>
				<i className="fas fa-home" />
				About Me
			</li>
			<li>
				<i className="fas fa-briefcase" />
				Portfolio
			</li>
			<li>
				<i className="fas fa-address-book" />
				Contact Me
			</li>
			<li>
				<i className="fas fa-file" />
				Resume
			</li>

			<span>
				<i className="fas fa-mobile-alt" />
				<i className="fas fa-envelope" />
				<i className="fab fa-linkedin" />
				<i className="fab fa-github" />
				<i className="fab fa-slack" />
				<i className="fab fa-meetup" />
			</span>
		</ul>
	</nav>
)

export default sideMenuOut
