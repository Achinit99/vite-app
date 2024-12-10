import React, { useState } from 'react'
import HeaderContent from "../Components/HeaderContent/HeaderContent";
import BodyContent from "../Components/BodyContent/BodyContent";

function BlogPage() {

  const [count, setcount] = useState(0)

  const decrementFunction = () => {
    setcount(count - 1)
  }
  const incrementFunction = () => {
    setcount(count + 1)
  }

  return (
    <>
      <div>
        <HeaderContent />
        <BodyContent>
          <h3>Blog page</h3>
        </BodyContent>
      </div>

      <div>
        <p>Counter</p>
        <button onClick={decrementFunction}>-</button>
        <button onClick={incrementFunction}>+</button>
        <p>{count}</p>

      </div>
    </>
  )
}

export default BlogPage
