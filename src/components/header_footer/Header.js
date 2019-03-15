import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';

class Header extends Component {
  state = {
    drawerOpen: false,
    headerShow: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    console.log(window.scrollY)
    if (window.scrollY > document.documentElement.clientHeight / 2) {
      this.setState({
        headerShow: true
      })
    } else {
      this.setState({
        headerShow: false
      })
    }
  }

  toggleDrawer = (value) => {
    this.setState({
      drawerOpen: value
    })
  }

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.headerShow ? 'rgba(47, 47, 47, 1)' : 'rgba(47, 47, 47, 0)',
          boxShadow: 'none',
          padding: '10px 0'
        }}
      >
        <Toolbar>

          <div className="header_logo" style={{
            color: this.state.headerShow ? 'rgba(255, 255, 255, 1)' : 'transparent'
          }}>
            Guitar City
          </div>

          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <SideDrawer
            open={this.state.drawerOpen}
            onClose={(value) => this.toggleDrawer(value)}
          />

        </Toolbar>
      </AppBar>
    )
  }
}

export default Header;