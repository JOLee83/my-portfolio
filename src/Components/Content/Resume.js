import React, { Component } from 'react'
import styled from 'styled-components'
import resume from '../../Resources/Justin_Oliver_Lee_Resume.pdf'

const Document = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	img {
		border: 1px solid black;
		width: 75%;
		margin: 10px;
	}
	@media (min-width: 1000px) {
		width: 50%;
		img {
			width: 100%;
		}
	}
`
class Resume extends Component {
	render() {
		return (
			<Document>
				<img alt="resume" src="./Justin_Oliver_Lee_Resume.jpg" />
				<a
					href="https://drive.google.com/file/d/1TuEUxaJHyiaz4SVyjLEzUuuqmxlJBvIq/view?usp=sharing"
					target="_blank"
				>
					<i className="fas fa-file" /> Resume (PDF)
				</a>
			</Document>
		)
	}
}

export default Resume
