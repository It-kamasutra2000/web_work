import { StateType } from '../store';


export const selectImages = (state: StateType) => {
    return state.screenshots.images
}
