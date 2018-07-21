// import React from 'react'
// import { insert } from '../../libs/firebaseHelper'
// import md5 from 'md5'

// export default class Dashboard extends React.Component {
//   state = {
//     hintName: '',
//     hintAnswer: '',
//     hintCode: ''
//     // questionId: '',
//     // questionName: '',
//     // choice1: {
//     //   choiceName: '',
//     //   isTrue: false
//     // },
//     // choice2: {
//     //   choiceName: '',
//     //   isTrue: false
//     // },
//     // choice3: {
//     //   choiceName: '',
//     //   isTrue: false
//     // },
//     // choice4: {
//     //   choiceName: '',
//     //   isTrue: false
//     // }
//   }

//    insertData = () => {
//      // let { questionId, questionName, choice1, choice2, choice3, choice4 } = this.state
//      // insert(`questions`, { questionId, questionName, choice: [choice1, choice2, choice3, choice4] }, questionId)
//      insert(`hints`, { ...this.state }, this.state.hintCode)
//      console.log(this.state)
//    }

//    render () {
//      return (
//        <div className='container'>
//          <div className="row">
//            <div className="col-12">
//              <form className="form-control">
//                 NAME<br />
//                <input type="text" value={this.state.hintName} onChange={(e) => {
//                  this.setState({
//                    hintName: e.target.value
//                  })
//                }} /><br />
//                ANSWER <br />
//                <input type="text" value={this.state.hintAnswer} onChange={(e) => {
//                  this.setState({
//                    hintAnswer: e.target.value,
//                    hintCode: md5(e.target.value)
//                  })
//                }} /><br />
//                {this.state.hintCode}
//                {/* C1 <br />
//                <input type="text" value={this.state.choice1.choiceName} onChange={(e) => {
//                  this.setState({
//                    choice1: {
//                      ...this.state.choice1,
//                      choiceName: e.target.value
//                    }
//                  })
//                }} />
//                <input onChange={e => this.setState({
//                  choice1: {
//                    ...this.state.choice1,
//                    isTrue: true
//                  }
//                })} type="radio" />
//                <br />  C2 <br />
//                <input type="text" value={this.state.choice2.choiceName} onChange={(e) => {
//                  this.setState({
//                    choice2: {
//                      ...this.state.choice2,
//                      choiceName: e.target.value
//                    }
//                  })
//                }} />
//                <input onChange={e => this.setState({
//                  choice2: {
//                    ...this.state.choice2,
//                    isTrue: true
//                  }
//                })} type="radio" />
//                <br /> C3 <br />
//                <input type="text" value={this.state.choice3.choiceName} onChange={(e) => {
//                  this.setState({
//                    choice3: {
//                      ...this.state.choice3,
//                      choiceName: e.target.value
//                    }
//                  })
//                }} />
//                <input onChange={e => this.setState({
//                  choice3: {
//                    ...this.state.choice3,
//                    isTrue: true
//                  }
//                })} type="radio" />
//                <br />C4 <br />
//                <input type="text" value={this.state.choice4.choiceName} onChange={(e) => {
//                  this.setState({
//                    choice4: {
//                      ...this.state.choice4,
//                      choiceName: e.target.value
//                    }
//                  })
//                }} />
//                <input onChange={e => this.setState({
//                  choice4: {
//                    ...this.state.choice4,
//                    isTrue: true
//                  }
//                })} type="radio" /> */}
//              </form>
//              <button onClick={this.insertData} className='btn btn-primary'>SENT</button>
//            </div>
//          </div>
//        </div>
//      )
//    }
// }
