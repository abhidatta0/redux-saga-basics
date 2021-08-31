import React from 'react';
import { useSelector } from 'react-redux';

const AnotherComp = () => {
    const currentCount = useSelector((state) => state.updownReducer.currentCount);
    return (
        <div>
            We can access currentCount from here as well <span className="highlight">{currentCount}</span>
        </div>
    )
}

export default AnotherComp;