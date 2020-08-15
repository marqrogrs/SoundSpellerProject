import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

const LessonContext = React.createContext()
const LessonConsumer = LessonContext.Consumer

class LessonProvider extends Component {
  constructor(props) {
    super(props)

    this.setLesson = (lesson) => {
      this.setState({ selectedLesson: lesson })
    }
    this.setLevel = (level) => {
      this.setState({ selectedLevel: level })
    }

    this.state = {
      selectedLesson: null,
      selectedLevel: 0,
      setLesson: this.setLesson,
      setLevel: this.setLevel,
    }
  }

  componentDidMount() {
    // console.log('MOunted provider')
  }

  componentWillUnmount() {
    // console.log('unmounted provider')
  }

  render() {
    // console.log(this.state.selectedLevel)
    return (
      <LessonContext.Provider value={this.state}>
        {this.props.children}
      </LessonContext.Provider>
    )
  }
}

LessonProvider = withRouter(LessonProvider)

export { LessonProvider, LessonContext, LessonConsumer }
