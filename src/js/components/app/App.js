import React from 'react'

import Main from './../layout/Main'
import Header from './../layout/header/Header'
import Projects from './../projects/ProjectsContainer'
import MainBody from './../layout/body/Main'

export default class App extends React.Component {
  render() {
    return (
      <Main>
        <Header />
        <Projects />
        <MainBody>
          {this.props.children}
        </MainBody>
      </Main>
    )
  }
}
