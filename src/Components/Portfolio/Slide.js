import React from 'react'
import styled from 'styled-components'

const ShowMyWork = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border 1px solid rgb(0, 255, 242);
	border-radius: 5px;
	background-color: rgba(255, 255, 255, .65);
	margin: 1rem;
	section {
		margin: 1rem 4% 0 4%; 
		display: flex;
		flex-direction: column;
		align-items: center;
		h2 {
			margin: 0 0 .5rem 0;
			font-style: italic;
		}
		img {
			width: 96%;
			border 1px solid rgb(0, 0, 0);
		}
		p{
			text-indent: 1rem;
			width: 110%;
			white-space: pre-wrap;
			margin-top: 0;
		}
	}
	a {
		padding: 0 .5rem;
	}
	.git {
		i{
		font-size: 3rem;
		}
	}
`

const Slide = ({ title, image, location, code, description }) => {
	return (
		<div className="slide">
			<ShowMyWork>
				<section>
					<h2>{title}</h2>
					<img src={image} alt={title} />
					<section>
						<p>{description}</p>
					</section>
					<aside>
						<a href={location} target="_blank" rel="noopener noreferrer">
							The Site
						</a>
						<a
							className="git"
							href="https://github.com/JOLee83"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-github-square" title="My GitHub" />
						</a>
						<a href={code} target="_blank" rel="noopener noreferrer">
							The Code
						</a>
					</aside>
				</section>
			</ShowMyWork>
		</div>
	)
}

export default Slide
