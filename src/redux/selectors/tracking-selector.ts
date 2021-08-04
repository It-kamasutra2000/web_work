import { StateType } from '../store';


export const selectTrackingBlocksDatas = (state: StateType) => {
    return state.tracking.trackingBlockDatas
}