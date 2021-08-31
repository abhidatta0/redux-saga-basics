export const setQuote = (quoteObject) => {
    return {
        type: 'SET_QUOTE',
        payload: {
            data: quoteObject
        }
    }
}