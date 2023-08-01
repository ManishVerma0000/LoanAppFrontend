import { Step_One_details } from './constants';
import { Password_Details } from './constants';
import { toatalAmount } from './constants';

export function steponedetails(data) {
    return {
        type: Step_One_details,
        data: data
    }
}

export function passwordDetails(data) {
    return {
        type: Password_Details,
        data: data
    }


}

export function toatalAmountfunction(data) {
    return {
        type: toatalAmount,
        data: data
    }

}