import {types} from "../types/Types";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true,
                url: '/homeuser'
            }

        case types.logout:
            return {
                logged: false,
                url:"/"
            }

        default:
            return state;
    }
}