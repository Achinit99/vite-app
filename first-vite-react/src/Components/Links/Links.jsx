import React from 'react'
import MenuItem from '../MenuItem/MenuItem'


function Links() {
  return (
    <div>
      <MenuItem linktext="Home" linkurl="/" />
      <MenuItem linktext="About" linkurl="/about" />
      <MenuItem linktext="Contact us" linkurl="/contact" />
    </div>
  )
}

export default Links
