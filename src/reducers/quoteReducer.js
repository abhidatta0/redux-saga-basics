const initialState = {
    quote: '',
}
const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_QUOTE': {
            return {
                ...state,
                quote: action.payload.data,
            }
        }
        default: return state;
    }
}

export default quoteReducer;