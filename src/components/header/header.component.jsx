import React, {Component} from "react";

import logo from '../../assets/homepage/combine_logo.png';
import MenuButton from '../menu-button/menu-button.components';
import OverlayMenu from '../overlay-menu/overlay-menu.component';

import './header.style.scss';

class Header extends Component {

  constructor(props, context) {
    super(props, context);
 
    this.state = {
      visible: false
    };
 
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
 
  handleMouseDown(e) {
    this.toggleMenu();
 
    console.log("clicked");
    e.stopPropagation();
  }
 
  toggleMenu() {
    this.setState(
      {
        visible: !this.state.visible
      }
    );
  }

  render() {
     return (
      <header>
        <div className="header__russell--logo">
          <a><img src={logo} /></a>
        </div>
        <div className="header__overlay--menu" 
             id="overlay-menu">
          <MenuButton handleMouseDown={this.handleMouseDown} 
                      onMouseDown={this.handleMouseDown}/>
          <OverlayMenu handleMouseDown={this.handleMouseDown}
                menuVisibility={this.state.visible}/>
        </div>
      </header>
     );
  }
}

export default Header;