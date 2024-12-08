import React from 'react'

function MenuItem(props) {
  return (
    <>
      <a href="{props.linkurl}">{props.linktext}</a>
    </>
  )
}

export default MenuItem
