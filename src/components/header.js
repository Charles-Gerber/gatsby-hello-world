import React from 'react'

export default props => (
  <div>
    <h1>{props.headerText}</h1>
    <h2>{props.optionalText || 'toto'}</h2>
  </div>
)
