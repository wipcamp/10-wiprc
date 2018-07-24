import React from 'react'
import Reader from 'react-qr-reader'
import { insert } from '../../libs/firebaseHelper'
import { MinHeight } from '../Core/layout'

const Scanner = ({ setField, randomQuestion, game: { flavorId, questions, showHint, hintName, hintCode, error } }) => (
  <div className='container'>
    <div className='row'>
      <MinHeight className='col-12 text-center'>
        <h3 className='my-3'>แสกน QR Code !</h3>
        <h2>{hintName}</h2>
        {error && <div className="mt-5 alert alert-danger" role="alert">
          <h5>{error}</h5>
        </div>}
        <hr />
        <Reader
          delay={300}
          onError={(e) => {
            console.error('error ', e)
            setField('error', e)
          }}
          onScan={(value) => {
            console.log('scan ', value)
            if (value !== null) {
              if (hintCode === value) {
                let index = showHint.findIndex((data) => {
                  return data.hintCode === value
                })
                insert(`places`, { place: showHint[index].hintAnswer, hintName }, flavorId)
                console.log(index)
                showHint.splice(index, 1)
                setField('showHint', showHint)
                window.localStorage.setItem('hintAll', JSON.stringify(showHint))
                if (showHint.length <= 0) {
                  setField('step', 5)
                } else {
                  randomQuestion(questions, setField)
                  setField('step', 2)
                }
              } else {
                setField('error', 'QrCode ไม่ถูกต้อง')
              }
            }
          }}
          resolution={200}
        />
        <button onClick={() => setField('step', 3)} className="btn btn-primary col-12 mt-2">Back</button>
      </MinHeight>
    </div>
  </div>
)

export default Scanner
