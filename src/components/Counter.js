import React from 'react';
import { incrementNumber, decrementNumber } from '../actions/updownActions';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const currentCount = useSelector((state) => state.updownReducer.currentCount);
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(incrementNumber())}>
                Increment
            </button>
            <button onClick={() => dispatch(decrementNumber())}>
                Decrement
            </button>
            <div>
                Clicked {currentCount} times
            </div>
        </div>
    )
}

export default Counter;