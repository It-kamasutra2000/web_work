const initialState = {
    recommendationBlockDatas: [
        {
            image: 'https://www.webwork-tracker.com/images/rebranding/homepage/benefits/b1.png',
            title: 'Save time',
            text: `Automated time tracking allowed WebWork
            Time Tracker teams to save an average of
            41.8 hours employee/month.`,
            id: 0
        },
        {
            image: 'https://www.webwork-tracker.com/images/rebranding/homepage/benefits/b2.png',
            title: 'Boost productivity',
            text: `WebWork users reached 25% productivity
            increase due to accurate time tracking and
            real-time employee monitoring.`,
            id: 1
        },
        {
            image: 'https://www.webwork-tracker.com/images/rebranding/homepage/benefits/b3.png',
            title: 'Increase revenue',
            text: `An average estimate of savings that
            WebWork Time Tracker allows to
            experience is $799.6 employee/month.`,
            id: 2
        },
    ],
}


export type InitialStateType = typeof initialState;

export const performanceReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case '':
            return state
        default:
            return state
    }
}
