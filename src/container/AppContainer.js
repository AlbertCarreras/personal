import React, { Component } from 'react';
import Menu from './Menu'
import About from './About'
import Interests from './Interests'
import Contact from './Contact'
import Projects from './Projects'


class AppContainer extends Component {
  state = {
    selected: 'About'
  }

  //props function to Menu
  selectFunc = (option) => {
    this.setState({
      selected: option
    })
  }
  
  //selector for container rendering
  displayContainer = () => {
    switch(this.state.selected) {
      case 'About':
        return <About/>
      case 'Interests':
        return <Interests /> 
      case 'Projects':
        return <Projects /> 
      case 'Contact':
        return <Contact /> 
      default:
        return <About/>
    }
  }
  render() {
    return (
      <div className='main-container'>
        <Menu
        selected={this.state.selected}
        selectFunc={this.selectFunc}
        />
        {this.displayContainer()}
      </div>
    );
  }
}

export default AppContainer;
