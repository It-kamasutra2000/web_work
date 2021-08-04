const initialState = {
    trackingBlockDatas: [
        {
            title: 'Desktop Tracker',
            text: `All features are fully available on the desktop tracking. It captures the screen based on the chosen screenshot mode. 
            It monitors apps and web usage to give you full understanding of employees’ performance, records activity level
             expressed as a percentage and much more.`,
            id: 0
        },
        {
            title: 'Web Tracker:',
            text: `The web tracking allows you to use the software without downloading it. It is perfect when time tracking is more important than 
            activity monitoring. You simply choose the project or task and start tracking time.`,
            id: 1
        },
        {
            title: 'Mobile Tracker:',
            text: `The mobile tracking is a simple solution to track time. It can be used in many cases such as for tracking the time of meetings 
            and calls. Also, it can be very helpful for industries such as goods transportation, manufacturing, construction and so on. 
            It will allow you to keep track of time and make sure that the job is done on time.`,
            id: 2
        },
        {
            title: 'Chrome Extension Tracker:',
            text: `Use your favorite tools and apps to their fullest with WebWork Chrome Extension. It will show the time you spend on each project
             or task and will make sure that everything is completed on time..`,
            id: 3
        }, 
    ] ,
    
}


export type InitialStateType = typeof initialState;


export const trackingReducer = (state = initialState, action: []): InitialStateType => {
    switch ('') {
        case '':
            return state
        default:
            return state
    }
}


