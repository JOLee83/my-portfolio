import React, { Component } from 'react'
import Toolbar from './Components/Toolbar/Toolbar'
import SideMenu from './Components/SideMenu/SideMenu'
import SideMenuOut from './Components/SideMenu/SideMenuOut'

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
			sideMenu = <SideMenu />
		}
		if (this.state.sideMenuOpen === false && this.state.visible) {
			sideMenu = <SideMenuOut />
		}
		return (
			<>
				<Toolbar _menuToggleClick={this._menuToggleClick} />
				{sideMenu}
				<main>
					<p>Coming Soon</p>
				</main>
			</>
		)
	}
}

export default App
