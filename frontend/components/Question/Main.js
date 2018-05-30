import React from 'react'
import { MinHeight } from '../Core/layout'
import { insert } from '../../libs/firebaseHelper'
import md5 from 'md5'

const Question = ({ setField, randomHint, game: { flavorId, showHint, index, step, score, hint, question, isClick, delay } }) => (
  <div className='container'>
    <div className='row'>
      <MinHeight className='col-12 my-3'>
        <h2>
          คำถาม
          { console.log('questions step ', question)}
        </h2>
        <h3 className='text-center my-3'>
          { question[index].questionName }
        </h3>
        {
          question[index].choice.map((data, i) => {
            return (
              <button key={i}
                className={`btn btn-success my-2 col-12 ${!isClick && 'disabled btn-danger'}`}
                disabled={!isClick}
                onClick={() => {
                  console.log(data.isTrue)
                  if (data.isTrue) {
                    insert(`scores`, { score: 1, flavorId, questionId: question[index].questionId }, md5({ flavorId, score, ...question[index].questionId }))
                    setField('score', score + 1)
                    randomHint(hint, setField, showHint)
                    setField('delay', 2500)
                    setField('step', 3)
                  } else {
                    setField('delay', delay * 2)
                    setField('isClick', false)
                    setTimeout(() => {
                      setField('isClick', true)
                    }, delay)
                  }
                }}
              >{ data.choiceName }
              </button>
            )
          })
        }
        <h3 className='text-center text-danger my-3'>
          { !isClick && <span>ตอบผิด! กรุณารอ {delay / 1000 } วิ </span> }
        </h3>
      </MinHeight>
    </div>
  </div>
)

export default Question
