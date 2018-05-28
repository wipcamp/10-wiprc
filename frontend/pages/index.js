import React from 'react'
import withApp from '../libs/withApp'
import { compose } from 'recompose'
import { connect } from 'react-redux'

import injectGlobal from '../components/Core/injectGloal'
import LandingPage from '../components/Landing/Main'
import QuestionPage from '../components/Question/Main'
import HintPage from '../components/Hint/Main'
import Scanner from '../components/Scanner/Main'

import { actions as gameActions } from '../redux/modules/game'

class IndexPage extends React.Component {
  async componentDidMount () {
    injectGlobal()
    // const video = document.getElementById('video')
    // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    //   // Not adding `{ audio: true }` since we only want video now
    //   navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    //     video.src = window && window.URL.createObjectURL(stream)
    //     video.play()
    //   })
    // }
  }
  render () {
    let { game: { step } } = this.props
    return (
      <div>
        {/* {step === 1 && <LandingPage {...this.props} />} */}
        {step === 2 && <QuestionPage {...this.props} />}
        {step === 3 && <HintPage {...this.props} />}
        {step === 1 && <Scanner {...this.props} />}
      </div>
    )
  }
}

export default compose(
  withApp,
  connect(
    state => ({
      game: state.game
    }),
    {
      setField: gameActions.setField
    }
  )
)(IndexPage)
