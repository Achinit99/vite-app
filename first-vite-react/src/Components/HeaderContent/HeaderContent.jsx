import React from 'react'
import './HeaderContent.css'
import MenuLink from '../MenuLink/MenuLink'

function HeaderContent() {
  return (
    <div>
      <img src="{logoimage}" alt="" />
      <MenuLink linkname="Home" url="#home" />
      <MenuLink linkname="About" url="#about" />
      <MenuLink linkname="Contact" url="#contact" />
      <MenuLink linkname="Login" url="#login" />
    </div>
  )
}

export default HeaderContent
