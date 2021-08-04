const initialState = {
    featureBlocksDatas: [
        {
            img: 'https://www.webwork-tracker.com/images/rebranding/homepage/icons/feature1.png',
            title: 'Time Tracking with Screenshots',
            id: 0,
            text: '4 screenshot modes to get full transparency of workplace activities.'
        },
        {
            img: 'https://www.webwork-tracker.com/images/rebranding/homepage/icons/feature3.png',
            title: 'Attendance monitoring',
            id: 1,
            text: `The report shows entry and exit times based on specifics of late coming, early exit,
            and net hours to easily see if employees have covered their required work time.`
        },
        {
            img: 'https://www.webwork-tracker.com/images/rebranding/homepage/icons/feature5.png',
            title: 'Billable hours and invoice',
            id: 2,
            text: `Assign tasks, set priority, write description and attach files to ensure that you have no missed deadlines.`
          
        },
        {
            img: 'https://www.webwork-tracker.com/images/rebranding/homepage/icons/feature2.png',
            title: 'Task management system',
            id: 3,
            text: `Assign tasks, set priority, write description and attach files to ensure that you have no missed deadlines.`
        },
        {
            img: 'https://www.webwork-tracker.com/images/rebranding/homepage/icons/feature4.png',
            title: 'Reports',
            id: 4,
            text: `Generate real time reports of attendance, productivity, activity level etc.
             to inspect and analyze your workplace activities.`
        },
        {
            img: 'https://www.webwork-tracker.com/images/rebranding/homepage/icons/feature6.png',
            title: 'Apps & Websites usage',
            id: 5,
            text: `Gain insights about apps and websites your employees are using most frequently during their work time.`
        }
    ]
}


export type InitialStateType = typeof initialState;

export const featureReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case '':
            return state
        default:
            return state
    }
}
