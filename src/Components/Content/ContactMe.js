import React, { Component } from 'react'
class ContanctMe extends Component {
	render() {
		return (
			<>
				<section>
					<a href="tel://19044729516">
						<i className="fas fa-mobile-alt" /> (904) 472-9516
					</a>
					<a href="mailto:lee.justin.oliver@gmail.com">
						<i className="fas fa-envelope" />
						lee.justin.oliver@gmail.com
					</a>
					<a
						href="https://www.linkedin.com/in/justin-oliver-lee/"
						target="_blank"
					>
						<i className="fab fa-linkedin" />
					</a>
					<a href="https://github.com/JOLee83" target="_blank">
						<i className="fab fa-github" />
					</a>
					<i className="fab fa-slack" />
					<a href="https://www.meetup.com/members/262768512/" target="_blank">
						<i className="fab fa-meetup" />
					</a>
				</section>
			</>
		)
	}
}

export default ContanctMe
