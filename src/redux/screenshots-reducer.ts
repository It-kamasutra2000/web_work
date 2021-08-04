const initialState = {
    images: [
        {
            image: 'https://www.webwork-tracker.com/images/rebranding/homepage/awards/award1.png',
            url: 'https://www.saasworthy.com/product/webwork-time-tracker',
            id: 0
        },
        {
            image: 'https://www.webwork-tracker.com/images/rebranding/homepage/awards/award2.png',
            url: 'https://www.softwareworld.co/time-tracking-software/#WebWork%20Time%20Tracker',
            id: 1
        },
        {
            image: 'https://www.webwork-tracker.com/images/rebranding/homepage/awards/award3.png',
            url: 'https://digital.com/employee-monitoring-software',
            id: 2
        },
        {
            image: 'https://www.webwork-tracker.com/images/rebranding/homepage/awards/award4.png',
            url: 'https://crozdesk.com/human-resources/attendance-tracking-time-clock-software/webwork-time-tracker',
            id: 3
        },
        {
            image:  'https://www.webwork-tracker.com/images/rebranding/homepage/awards/award5.png',
            url: 'https://crozdesk.com/human-resources/attendance-tracking-time-clock-software/webwork-time-tracker',
            id: 4
        },
        {
            image:   'https://www.webwork-tracker.com/images/rebranding/homepage/awards/award7.png',
            url: 'https://www.g2.com/products/webwork-time-tracker/reviews',
            id: 5
        }, 
        {
            image:   'https://www.webwork-tracker.com/images/rebranding/homepage/awards/award6.png',
            url: 'https://www.softwaresuggest.com/blog/webwork-time-tracker-review',
            id: 6
        }, 
    ] ,


}


export type InitialStateType = typeof initialState;


export const screenshotsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case '':
            return state
        default:
            return state
    }
}


