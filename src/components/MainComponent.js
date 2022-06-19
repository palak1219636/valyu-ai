import React, { useEffect } from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'styled-minimal';
import { useSelector, useDispatch } from 'react-redux'
import { updateValue } from '../redux/counterSlice';
function MainComponent() {
    const [count, setCount] = useState(0);
    const[target,setTarget]= useState(false);
    // const updatedValue = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
   useEffect(() => {
     if(count>=50){
      setTarget(true);
     }
     else{
      setTarget(false);
     }
   }, [count]);
   const handleSubmit =()=>{
        dispatch(updateValue(count))
   }
    
  return (
    <div>
      {target?<p>Target Reached</p>:<p>You clicked {count} times</p>}
      
        <Button className='btn2'style={{color:target?'green':''}} onClick={() =>setCount(count - 5)}>
        Decrease 5
        </Button>
        <IncrementButton className='btn1 .btn-default .btn-sm' color={target?'green':'black'} onClick={() =>setCount(count + 5)}>
        Increase 5 
        </IncrementButton>
        <br/>
        <button className='submit-btn' onClick={handleSubmit} style={{color:target?'green':'black'}} >
          Submit
        </button>
    </div>
  )
}


export default MainComponent

const IncrementButton= styled.button`
color:${(props)=>props.color};
`;