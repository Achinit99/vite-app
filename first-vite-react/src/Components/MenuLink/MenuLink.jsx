import React from 'react'

function MenuLink(props) {
  return (
    <>
      <a href={props.linkurl}>{props.linktext}</a>
    </>
  )
}

export default MenuLink
