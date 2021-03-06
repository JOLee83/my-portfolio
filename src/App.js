import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Toolbar from './Components/Toolbar/Toolbar'
import SideMenu from './Components/SideMenu/SideMenu'
import SideMenuOut from './Components/SideMenu/SideMenuOut'
import AboutMe from './Components/Content/AboutMe'
import ContactMe from './Components/Content/ContactMe'
import Resume from './Components/Content/Resume'
import Slider from './Components/Portfolio/Slider'

class App extends Component {
	state = {
		sideMenuOpen: false,
		visible: false
	}
	_menuToggleClick = () => {
		this.setState(prevState => {
			if (this.state.sideMenuOpen === false) {
				return {
					sideMenuOpen: !prevState.sideMenuOpen,
					visible: (prevState.visible = true)
				}
			}
			if (this.state.visible) {
				return {
					sideMenuOpen: !prevState.sideMenuOpen
				}
			}
		})
	}
	render() {
		let sideMenu
		if (this.state.sideMenuOpen) {
			sideMenu = <SideMenu click={this._menuToggleClick} />
		}
		if (this.state.sideMenuOpen === false && this.state.visible) {
			sideMenu = <SideMenuOut />
		}
		return (
			<Router>
				<>
					<Toolbar _menuToggleClick={this._menuToggleClick} />
					{sideMenu}
					<main>
						<Switch>
							<Route exact path="/" component={AboutMe} />
							<Route path="/portfolio" component={Slider} />
							<Route path="/contactme" component={ContactMe} />
							<Route path="/resume" component={Resume} />
						</Switch>
					</main>
				</>
			</Router>
		)
	}
}

export default App
