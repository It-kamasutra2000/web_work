import { StateType } from './../store';

export const selectFooterSection1 = (state: StateType) => {
    return state.footer.footerSection1
}

export const selectFooterSection2 = (state: StateType) => {
    return state.footer.footerSection2
}

export const selectFooterSection3 = (state: StateType) => {
    return state.footer.footerSection3
}

export const selectFooterSection4 = (state: StateType) => {
    return state.footer.footerSection4
}