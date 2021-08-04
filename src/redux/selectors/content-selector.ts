import { StateType } from '../store';

export const selectColors = (state: StateType) => {
    return state.content.colors
}

export const selectColor = (state: StateType) => {
    return state.content.selectedColor
}

export const selectPageNames = (state: StateType) => {
    return state.content.pageNames
}


