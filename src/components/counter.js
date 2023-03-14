/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement,incrementByAmount,reset } from '../redux/counter/counterSlice';
import { useState } from 'react'


const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(0);
    const addValue = Number(amount) || 0;

    const resetAll = () => {
        dispatch(reset())
    }

  return (
    <div>
        <h1>Counter</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{count}</span>
        <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>AddAmount</button>
        <button onClick={resetAll}>Reset</button>
    </div>
  )
}

export default Counter
