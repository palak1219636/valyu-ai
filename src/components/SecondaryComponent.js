import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
function SecondaryComponent() {
    const count = useSelector((state) => state.counter.value)
  return (
    <div>{count}</div>
  )
}

export default SecondaryComponent