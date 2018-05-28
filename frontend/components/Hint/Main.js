import React from 'react'

const Hint = ({ setField }) => (
  <div>
    Hint
    <ul>
      <li>อะไรเอ่ย</li>
      <li>อะไรอ่อ</li>
      <li>อะไรนะ</li>
    </ul>
    <button onClick={() => setField('step', 4)}>อะไรนักหนา</button>
  </div>
)

export default Hint
