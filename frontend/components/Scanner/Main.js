import React from 'react'
import Reader from 'react-qr-reader'
import { MinHeight } from '../Core/layout'

const Scanner = ({ setField, randomQuestion, game: { questions, showHint, hintCode, error } }) => (
  <div className='container'>
    <div className='row'>
      <MinHeight className='col-12 text-center'>
        <h1 className='my-3'>แสกน QR Code !</h1>
        {
          error && <h3 className='my-3'>{ error }</h3>
        }
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
