import { StateType } from './../store';


export const selectCustomerBlockDatas1 = (state: StateType) => {
    return state.customers.customerBlockDatas1
}

export const selectCustomerBlockDatas2 = (state: StateType) => {
    return state.customers.customerBlockDatas2
}