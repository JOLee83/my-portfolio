import React, { Component } from 'react'
import styled from 'styled-components'

const About = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

	img {
		border-radius: 50%;
		width: 60%;
		margin-top: 1rem;
		border 1.5px solid rgb(0, 255, 242);
		background-image: linear-gradient(
			to top,
			rgba(0, 120, 255, 0.75),
			rgba(0, 210, 255, 0.75)
		);
		padding: 0.5rem;
		box-shadow: 0.1rem 0.1rem 0.1rem rgb(169, 169, 169);

	}
	section {
		border 1px solid rgb(0, 255, 242);
		border-radius: 5px;
		margin: 1rem 4% 0 4%; 
		display: flex;
		flex-direction: column;
		align-items: center;
		box-shadow: 0.1rem 0.1rem 0.1rem rgb(169, 169, 169);
		background-color: rgba(255, 255, 255, .65);
		h2 {
			margin: 0 0 .5rem 0;
			font-style: italic;

		}
		p{
			width: 90%;
			text-indent: 1.5rem;
		}
	
	}
	@media (min-width: 700px) {
	img {
		width: 40%
	}
	}
	@media (min-width: 900px) {
		margin: 4% 0 0 4%; 
		flex-direction: row;
		img {
			width: 25%;
		}

	}
`

class AboutMe extends Component {
	render() {
		return (
			<About>
				<img src="./img/profilepicture.jpg" />
				<section>
					<h2>Hello,</h2>
					<p>
						I’m Justin Oliver Lee, a Full Stack Web Developer in the Tampa Bay
						Area. My past experience involved management in the Hospitality
						Industry, and I’ve studied business management at USF. Recently, I
						decided to follow my passion for building and creating things which
						led me to increasing my coding knowledge around how to make user
						friendly, functional web applications. Through that learning
						process, I have come to enjoy the process and challenges that
						creating websites and other applications bring while increasing my
						understanding of methods to improve my development skills.
					</p>
					<p>
						Although I am more than capable of back-end development, my real
						passions are in front-end development. My eye for detail has been a
						real asset in sites that are not only functional but also appealing
						to the end user. My current front-end skills set includes HTML5,
						CSS3, JavaScript, along with frameworks such as React. My back-end
						skill set includes C# and the .Net framework. At this time I am
						continuing my development knowledge surrounding React Native, React
						Redux, and Phaser3. My long term goal is to continue to expand my
						skills sets into other languages and frameworks.
					</p>
					<p>
						Development has proven to fit well with other pieces of my life.
						When I’m not coding, I enjoy the challenge of doing a puzzle and
						playing games, along with expressing my creative nature with
						different arts and crafts. These outside interests help fuel my
						passion for front-end development.
					</p>
					<p>
						All that is missing from my career now is the opportunity to bring
						my passion for development to the right company. I look forward to
						hearing from you so that I can share additional examples of my work
						and show how I will be a great fit for your organization.
					</p>
				</section>
			</About>
		)
	}
}

export default AboutMe
