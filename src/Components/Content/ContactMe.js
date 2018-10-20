import React, { Component } from 'react'
import styled from 'styled-components'

const ContactInfo = styled.div`
	display: flex;
	flex-direction: column;
	padding 0;
	margin: 0;
	width: 100%;
	height: 100%;
	a {
		margin: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	aside {
		font-size: 0rem;
	}
	i {
		margin-bottom: 1rem;
		font-size: 4rem;
		background-image: linear-gradient(to top, rgb(0, 120, 255), rgb(0, 210, 255));
		width: 6rem;
		height: 5rem;
		text-align: center;
		padding-top: 1rem;
		border-radius: 50%;
		border 3px solid rgb(0, 255, 242);
		box-shadow: 0.1rem 0.1rem 0.1rem black;
		transition: border-color 0.5s ease-in-out;

	}
	h1 {
		margin: 1rem;
		text-align: center;
		font-size: 1.5rem;
		font-style: italic;
		font-weight: normal;
		margin-bottom: .5rem;
	}
	p {
		margin: 0;
		padding: 0 1.5rem;
		text-align: center;
	}
	@media (min-width: 500px) {
		padding-top: 3rem;	
		div {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
		}
		a {
			margin: 0 3rem .4rem 3rem;
		}
		aside {
			font-size: 1.1rem;
			text-align: center;
		}
		h1 {
			font-size: 2rem;
		}
		p {
			font-size: 1.3rem;
			margin-bottom: 6rem;
		}
		i:hover {
			border-color: rgba(255, 255, 255, 0.993);
		}
	}
`

class ContactMe extends Component {
	render() {
		return (
			<>
				<ContactInfo>
					<h1>Start a Conversation</h1>
					<p>
						Looking to fill a developer position or just want a web site built,
						let's talk.
					</p>
					<div>
						<aside>
							<a href="tel://19044729516">
								<i className="fas fa-mobile-alt" />
							</a>
							<a href="tel://19044729516">(904) 472-9516</a>
						</aside>
						<aside>
							<a href="mailto:lee.justin.oliver@gmail.com">
								<i className="fas fa-envelope" />
							</a>
							<a href="mailto:lee.justin.oliver@gmail.com">
								lee.justin.oliver@gmail.com
							</a>
						</aside>
						<aside>
							<a
								href="https://www.linkedin.com/in/justin-oliver-lee/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-linkedin" />
							</a>
							<a href="https://www.linkedin.com/in/justin-oliver-lee/">
								LinkedIn
							</a>
						</aside>
					</div>
				</ContactInfo>
			</>
		)
	}
}

export default ContactMe
