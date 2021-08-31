import React from 'react';
import { incrementNumber, decrementNumber } from '../actions/updownActions';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const currentCount = useSelector((state) => state.updownReducer.currentCount);
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(incrementNumber())} className="btn">
                Increment
            </button>
            <button onClick={() => dispatch(decrementNumber())} className="btn">
                Decrement
            </button>
            <div>
                Clicked <span className="highlight">{currentCount}</span> times
            </div>
        </div>
    )
}

export default Counter;