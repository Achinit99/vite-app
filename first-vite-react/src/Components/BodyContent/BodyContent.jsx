import React from 'react'
import './BodyContent.css'

function BodyContent(props) {
  return (
    <div id="bodycontent">
      <h1>BodyContent</h1>
      {props.children}
    </div>
  )
}

export default BodyContent
