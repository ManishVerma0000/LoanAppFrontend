import { Step_One_details } from "./constants";

const intialState = []


export const reducer = (state = intialState, action) => {

    switch (action.type) {
        case Step_One_details:
            return [
                ...state,
                action.data
            ]


        default:
            return state
    }

}