import React, { Component } from 'react'
import styled from 'styled-components'
import MyWork from './MyWork.json'

const ShowMyWork = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	section {
		border 1px solid rgb(0, 255, 242);
		border-radius: 5px;
		margin: 4% 4% 0 4%; 
		display: flex;
		flex-direction: column;
		align-items: center;
		box-shadow: 0.1rem 0.1rem 0.1rem rgb(169, 169, 169);
		background-color: rgba(255, 255, 255, .65);
		h2 {
			margin: 0 0 .5rem 0;
			font-style: italic;

		}
		img {
			width: 90%;
			border 1px solid rgb(0, 0, 0);
			margin-bottom: .5rem;

		}
		p{
			width: 90%;
		}
	
	}
	a {
		padding: .5rem;
	}
	i {
		font-size: 1.5rem;
		background-image: linear-gradient(to top, rgb(0, 120, 255), rgb(0, 210, 255));
		width: 2.25rem;
		height: 1.875rem;
		text-align: center;
		padding-top: .375rem;
		border-radius: 50%;
		border 1.5px solid rgb(0, 255, 242);
		box-shadow: 0.1rem 0.1rem 0.1rem black;
		margin: .5rem .5rem 0 .5rem ;
		color: rgb(0, 255, 242);

	}
	@media (min-width: 900px) {
		section{
			margin-top: 1rem;
			width: 40%;
			border 3px solid rgb(0, 255, 242);
		}
		i {
			font-size: 2rem;
			width: 3rem;
			height: 2.5rem;
			padding-top: .5rem;

		}
		i:hover {
			color: rgba(255, 255, 255, 0.993);
			border: 1.5px solid rgba(255, 255, 255, 0.993);
		}
	}
`
class Porfolio extends Component {
	constructor(props) {
		super(props)

		this.state = {
			index: 0
		}
	}
	First = () => {
		this.setState({ index: 0 })
	}
	Next = () => {
		this.setState({ index: (this.state.index + 1) % MyWork.length })
	}
	Back = () => {
		if (this.state.index > 0) {
			this.setState({ index: this.state.index - 1 })
		}
		if (this.state.index === 0) {
			this.setState({ index: MyWork.length - 1 })
		}
	}
	Last = () => {
		this.setState({ index: MyWork.length - 1 })
	}

	render() {
		const { index } = this.state

		return (
			<ShowMyWork>
				<section>
					<h2>{MyWork[index].title}</h2>
					<img src={MyWork[index].imageSource} alt={MyWork[index].title} />
					<aside>
						<a href={MyWork[index].location} target="_blank">
							The Site
						</a>
						<a href={MyWork[index].code} target="_blank">
							The Code
						</a>
					</aside>
				</section>
				<aside>
					<i className="fas fa-angle-double-left" onClick={this.First} />
					<i className="fas fa-angle-left" onClick={this.Back} />
					<a href="https://github.com/JOLee83">
						<i className="fab fa-github" />
					</a>
					<i className="fas fa-angle-right" onClick={this.Next} />
					<i className="fas fa-angle-double-right" onClick={this.Last} />
				</aside>
				<section>
					<p>{MyWork[index].description}</p>
				</section>
			</ShowMyWork>
		)
	}
}

export default Porfolio
