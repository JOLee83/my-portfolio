import React, { Component } from 'react'
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

class Slider extends Component {
	constructor(props) {
		super(props)
		this.state = {
			projects: [
				{
					title: 'Mine Sweeper',
					imageSource: './img/minesweeper.png',
					description:
						'A React based mine sweeper game using an API. This was from my first week of learning React at SDG. API can be slow at times, and have not set up for mobile use yet.',
					location: 'http://mine-sweeper-justin.surge.sh/',
					code: 'https://github.com/JOLee83/minesweeper'
				},
				{
					title: 'Black Jack',
					imageSource: './img/blackjack.png',
					description:
						'A JavaScript based Black Jack game. This was the culmination of my first week of learning JavaScript at SDG. Set up the CSS for mobile use, but looks great on large screens as well.',
					location: 'http://black-jack-justin.surge.sh/',
					code: 'https://github.com/JOLee83/black-jack'
				},
				{
					title: 'My Color Chart',
					imageSource: './img/colorchart.png',
					description:
						'My first project with React. The purpose of this project was an introduction to state and props, as well as to see how React renders the colors as the sliders moves. ',
					location: 'http://color-chart-justin.surge.sh/',
					code: 'https://github.com/JOLee83/color-chart'
				},
				{
					title: 'Tic Tac Toe',
					imageSource: './img/tictactoe.png',
					description:
						"A JavaScript based tic tac toe game. This was a group project from the second week of JavaScript as SDG. Worked on the project's logic with Allan Seitz, but CSS was all me.",
					location: 'http://t-t-t-jxoxl.surge.sh/',
					code: 'https://github.com/JOLee83/t-t-t'
				},
				{
					title: 'Score Board',
					imageSource: './img/scoreboard.png',
					description:
						'My first project with JavaScript at SDG. Learned about JavaScript basics like event listener, query selectors, and functions.',
					location: 'http://my-score-board-justin.surge.sh/',
					code: 'https://github.com/JOLee83/my-score-board'
				},
				{
					title: 'My Portfolio',
					imageSource: './img/portfolio.png',
					description:
						'I started to build this site as I completed the front-end portion of my time at SDG. I used React JS, React Router, Styled Components, and much more to build this site.',
					location: 'http://www.justin-oliver.com',
					code: 'https://github.com/JOLee83/my-portfolio'
				}
			],
			index: 0,
			translateValue: 0
		}
	}
	updateScreen = () => {
		this.setState(() => ({
			index: 0,
			translateValue: 0
		}))
	}
	componentDidMount() {
		window.addEventListener('resize', this.updateScreen)
	}
	prevSlide = () => {
		if (this.state.index === 0) {
			// return
			this.setState(prevState => ({
				index: this.state.projects.length - 1,
				translateValue:
					prevState.translateValue +
					-this.slideWidth() * (this.state.projects.length - 1)
			}))
			console.log(this.state.translateValue)
		}
		if (this.state.index !== 0) {
			this.setState(prevState => ({
				index: prevState.index - 1,
				translateValue: prevState.translateValue - -this.slideWidth()
			}))
			console.log(this.state.translateValue)
		}
	}
	nextSlide = () => {
		if (this.state.index === this.state.projects.length - 1) {
			this.setState(() => ({
				index: 0,
				translateValue: 0
			}))
			console.log(this.state.translateValue)
		}
		if (this.state.index !== this.state.projects.length - 1) {
			this.setState(prevState => ({
				index: prevState.index + 1,
				translateValue: prevState.translateValue + -this.slideWidth()
			}))
			console.log(this.state.translateValue)
		}
	}
	slideWidth = () => {
		return document.querySelector('.slide').clientWidth
	}
	render() {
		return (
			<div className="slider">
				<div
					className="slide-frame"
					style={{
						transform: `translateX(${this.state.translateValue}px)`,
						transition: 'transform ease-out 0.45s'
					}}
				>
					{this.state.projects.map(project => (
						<Slide
							key={project.title}
							title={project.title}
							image={project.imageSource}
							description={project.description}
							location={project.location}
							code={project.code}
						/>
					))}
				</div>
				<LeftArrow prevSlide={this.prevSlide} />
				<RightArrow nextSlide={this.nextSlide} />
			</div>
		)
	}
}

export default Slider
