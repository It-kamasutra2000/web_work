const initialState = {
    footerSection1: {
        title: 'Desktop Tracker',
        sections: [
            'Features', 'Time tracking with screenshots', 'Employee monitoring', 'Attendance tracking', 'Remote team monitoring',
            'How to track time', 'Pricing', 'Start free trial', 'Satisfaction guaranteed', 'User Request'
        ],
        id: 1
    },
    footerSection2: {
        title: 'Integration',
        sections: [
            'Asana', 'TJira', 'Bitbucket', 'Github', 'Zapier',
            'Trello', 'Zoho Project', 'Wrike', 'Click Up', 'See all'
        ],
    },
    footerSection3: {
        title: 'Powerful Yet Simple',
        sections: [
            'Boost Productivity', 'Comparison', 'Windows', 'Mac', 'Linux',
            'iOS', 'Android', 'Chrome Extension', 'Blog'
        ],
    },
    footerSection4: {
        title: 'Resources',
        sections: [
            'Sitemap', 'FAQ', 'Rest Api', 'Privacy Policy', 'Terms of service',
            'Contact Us', 
        ],
    },

}


export type InitialStateType = typeof initialState;


export const footerReducer = (state = initialState, action: []): InitialStateType => {
    switch ('') {
        case '':
            return state
        default:
            return state
    }
}


