import React from 'react'
import withApp from '../libs/withApp'
import { compose } from 'recompose'
import { connect } from 'react-redux'

import Header from '../components/Core/header'
import injectGlobal from '../components/Core/injectGloal'

import LandingPage from '../components/Landing/Main'
import QuestionPage from '../components/Question/Main'
import HintPage from '../components/Hint/Main'
import Scanner from '../components/Scanner/Main'
import Final from '../components/Final/Main'
import Dashboard from '../components/Dashboard/Main'

import { actions as gameActions } from '../redux/modules/game'

class IndexPage extends React.Component {
  async componentWillMount () {
    injectGlobal()
    this.props.getAllQuestion()
    this.props.getAllHint()
  }
  async componentDidMount () {
    let { setField, randomQuestion, getScore } = this.props
    window && window.localStorage.setItem('hintIndex', [])
    let questions = await window && window.localStorage.getItem('questions')
    if (questions) {
      let questionsParse = JSON.parse(questions)
      setField('questions', questionsParse)
      randomQuestion(questionsParse, setField)
    } else {
      this.props.getAllQuestion()
      this.props.getAllHint()
    }
    let flavorId = window && window.localStorage.getItem('flavorId')
    flavorId && getScore(flavorId)
  }
  render () {
    let { game: { step, flavor, score, questions } } = this.props
    if (questions) {
      return (
        <div className='container-fluid'>
          {flavor !== '' && <Header flavor={flavor} score={score} />}
          {step === 1 && <LandingPage {...this.props} />}
          {step === 2 && <QuestionPage {...this.props} />}
          {step === 3 && <HintPage {...this.props} />}
          {step === 4 && <Scanner {...this.props} />}
          {step === 5 && <Final {...this.props} />}
          {/* {step === 1 && <Dashboard {...this.props} />} */}
        </div>
      )
    } else {
      return (
        <div />
      )
    }
  }
}

export default compose(
  withApp,
  connect(
    state => ({
      game: state.game
    }),
    {
      setField: gameActions.setField,
      getFlavorByFlavorCode: gameActions.getFlavorByFlavorCode,
      randomQuestion: gameActions.randomQuestion,
      getAllHint: gameActions.getAllHint,
      getAllQuestion: gameActions.getAllQuestion,
      getScore: gameActions.getScore,
      randomHint: gameActions.randomHint
    }
  )
)(IndexPage)
