import { PropTypes } from 'react'
import { connect } from 'react-redux'

import Projects from './Projects'
import { fetchProjectsIfNeeded } from './../../redux/projects/actions'

const mapStateToProps = (state) => {
  const { projects } = state
  return {
    projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    componentDidMount: () => {
      dispatch(fetchProjectsIfNeeded())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
