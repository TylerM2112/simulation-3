const initialState = {
    user: {
        name: null,
    }
};

const FETCH_DATA = "FETCH_DATA";

export default function (state = initialState, action) { 
    switch (action.type) { 
        case FETCH_DATA:
            return { ...state, user: action.payload };
        default:
            return state;    
    }
}


export function fetchData(user) {
    return {
        type: FETCH_DATA,
        payload: user,
    };
 }
