
import { setLocal, setLocalUser } from "../helpers/localStorage";


export const userReducer = (state = [], action) => {

    let newState;
    switch (action.type) {

        case '[USER] add user':
            newState = [...state, action.payload];

            setLocalUser(action.payload);
            setLocal(newState);            

            break;

        default:
            newState = state;
            break;
    }

    return newState;

}