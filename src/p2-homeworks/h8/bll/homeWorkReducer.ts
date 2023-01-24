import { UserType } from "../HW8"

export const homeWorkReducer = (state: Array<UserType>, action: {type:string,payload:string|number}): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sortup': {
            return[...state.sort((a, b) => a.age > b.age ? 1 : -1)]
        }
        case 'sortdown': {
            return[...state.sort((a, b) => a.age > b.age ? -1 : 1)]
        }
        case 'check': {
            return state.filter(el=>el.age>=18)
        }
        default: return state
    }
}