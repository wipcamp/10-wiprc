import React from 'react'
import Reader from 'react-qr-reader'

const Scanner = ({ setField, qrResult, error }) => (
// const Scanner = (props) => (
  <div>
    <div>Scanner - WOW</div>
    {/* <h2>Error : {props.error}</h2> */}
    {/* <h2>Result : {props.qrResult}</h2> */}
    <hr />
    <video id='preview' />

    {/* <Reader
      delay={700}
      onError={(e) => {
        console.log('error ', e)
        setField('error', e)
        // props.setField('error', e)
      }}
      onScan={(value) => {
        console.log('scan ', value)
        // value !== null && props.setField('qrResult', value)
        value !== null && setField('qrResult', value)
      }}
      resolution={100}
    /> */}
    <br />
  </div>
)

export default Scanner
