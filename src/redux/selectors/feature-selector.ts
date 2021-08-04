import { StateType } from './../store';


export const selectFeatureBlocksDatas = (state: StateType) => {
    return state.feature.featureBlocksDatas
}