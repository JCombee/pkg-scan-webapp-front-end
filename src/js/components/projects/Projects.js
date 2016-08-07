import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'

import Navbar from './../layout/nav/Navbar'
import NavbarItem from './../layout/nav/Item'

class Projects extends Component {

  componentDidMount() {
    this.props.componentDidMount()
  }

  render() {
    return (
      <Navbar>
        {this.props.projects.get('items').map((project, index) =>
          <NavbarItem to={'/project/' + project.get('slug')} key={index}>{project.get('name')}</NavbarItem>
        )}
      </Navbar>
    )
  }
}

Projects.propTypes = {
  projects: ImmutablePropTypes.map.isRequired,
  componentDidMount: PropTypes.func.isRequired
}

export default Projects
