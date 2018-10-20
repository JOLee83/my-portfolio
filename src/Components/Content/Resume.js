import React, { Component } from 'react'
import styled from 'styled-components'

const Document = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
	font-size: 1.2rem;
	img {
		border: 1.1px solid black;
		width: 95%;
		margin: 10px;
		box-shadow: 0.1rem 0.1rem 0.1rem rgb(169, 169, 169);
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
				<a
					href="https://drive.google.com/file/d/1TuEUxaJHyiaz4SVyjLEzUuuqmxlJBvIq/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fas fa-file" /> Resume (PDF)
				</a>
				<img alt="resume" src="./img/Justin_Oliver_Lee_Resume.jpg" />
			</Document>
		)
	}
}

export default Resume
