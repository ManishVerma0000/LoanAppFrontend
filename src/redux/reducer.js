import { passwordDetails } from "./action";
import { Step_One_details } from "./constants";
import { Password_Details } from "./constants";
import { toatalAmount } from "./constants";

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

export const passwoprdreducer = (state = intialState, action) => {

    switch (action.type) {
        case Password_Details:
            return [
                ...state,
                action.data
            ]

        default:
            return state
    }

}

export const toatalAmountreducer = (state = intialState, action) => {
    switch (action.type) {
        case toatalAmount:
            return [
                ...state,
                action.data
            ]

        default:
            return state
    }

}

