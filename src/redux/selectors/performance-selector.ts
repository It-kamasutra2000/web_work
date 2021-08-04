import { StateType } from './../store';


export const selectRecommendationBlockDatas = (state: StateType) => {
    return state.performance.recommendationBlockDatas
}
