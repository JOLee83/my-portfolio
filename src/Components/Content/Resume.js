import React, { Component } from 'react'
import styled from 'styled-components'
import resume from '../../Resources/Justin_Oliver_Lee_Resume.pdf'

const Document = styled.div`
	width: 80%;
	height: 100vh;
`
class Resume extends Component {
	render() {
		return (
			<Document>
				{/* <iframe
					title="resume"
					src="./Justin_Oliver_Lee_Resume.pdf"
					style={{ width: '100%', height: '100%' }}
				/> */}
				<a href={resume} target="_blank">
					Resume (PDF)
				</a>
			</Document>
		)
	}
}

export default Resume
