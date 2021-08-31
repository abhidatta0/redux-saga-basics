import React from 'react';
import { useSelector } from 'react-redux';

const Quotes = () => {
    const quotesObj = useSelector((state) => state.quoteReducer.quote);
    if (Object.keys(quotesObj).length === 0) {
        return null;
    }
    return (
        <div className="quotesWrapper">
            <h3 className="quotesContent">"{quotesObj.content}"</h3>
            <p>- {quotesObj.author}</p>
        </div>
    )
}

export default Quotes;