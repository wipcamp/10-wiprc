import React from 'react'

const Question = ({ setField }) => (
  <div>
    Question
    <h2>
      กามีนาหามีหมูไม่
    </h2>
    <ul>
      <li>มี</li>
      <li>มะมี</li>
      <li>มะยู้</li>
    </ul>
    <button onClick={() => setField('step', 3)}>อะเค</button>
  </div>
)

export default Question
