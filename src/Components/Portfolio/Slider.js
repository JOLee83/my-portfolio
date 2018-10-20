import React, { Component } from 'react'
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import MyWork from './MyWork.json'

class Slider extends Component {
	constructor(props) {
		super(props)
		this.state = {
			projects: MyWork,
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
		}
		if (this.state.index !== 0) {
			this.setState(prevState => ({
				index: prevState.index - 1,
				translateValue: prevState.translateValue - -this.slideWidth()
			}))
		}
	}
	nextSlide = () => {
		if (this.state.index === this.state.projects.length - 1) {
			this.setState(() => ({
				index: 0,
				translateValue: 0
			}))
		}
		if (this.state.index !== this.state.projects.length - 1) {
			this.setState(prevState => ({
				index: prevState.index + 1,
				translateValue: prevState.translateValue + -this.slideWidth()
			}))
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
