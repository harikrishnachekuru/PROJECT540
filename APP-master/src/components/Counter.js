import React from 'react';
import { compose, withStateHandlers, shouldUpdate } from 'proppy';
import { attach } from 'proppy-react';
import like from "./Assets/like.jpg";


//axios.post('http://localhost:4001/api/')
      
        

const P = compose(
  withStateHandlers(
    { counter: 0 },
    { handleIncrement: props => () => ({ counter: props.counter + 1 }) }
  ),
  shouldUpdate((prevProps, nextProps) => nextProps.counter % 1 === 0)
);

function Counter({ counter, handleIncrement }) {
  return (
    <div>
    

      <img src={like} onClick={handleIncrement} width="60px" alt="counter"/>
        
      &ensp;{counter}
    </div>
  );
}

export default attach(P)(Counter);