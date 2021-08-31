const initialState = {
    currentCount: 0,
};
const updownReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT': {
            return {
                ...state,
                currentCount: state.currentCount + 1,
            };
        }
        case 'DECREMENT': {
            return {
                ...state,
                currentCount: state.currentCount - 1,
            };
        }
        default: {
            return state;
        }
    }
}

export default updownReducer;