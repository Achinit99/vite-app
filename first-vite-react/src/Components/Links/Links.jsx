import React from 'react'
import MenuLink from '../MenuLink/MenuLink'

function Links() {
  return (
    <div className="links">
      <MenuLink linktext="Home" linkurl="/" />
      <MenuLink linktext="Blog" linkurl="/blog" />
      <MenuLink linktext="About" linkurl="/about" />
      <MenuLink linktext="Contact" linkurl="/contact" />
    </div>
  )
}

export default Links
