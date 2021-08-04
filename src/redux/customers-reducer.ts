const initialState = {
    customerBlockDatas1: [
        {
            avatar: 'https://www.webwork-tracker.com/images/rebranding/homepage/reviews/review1.png',
            name: 'OKSANA YURDIHA',
            id: 0,
            title: 'Graphic DesignerFreelancer',
            text: `Very friendly software that has all the necessary tools for comfortable work and interaction between the client and the executive.
             I’m a freelance retoucher, and it’s important for me that my customer can see what projects I’m working on, how I’m working (the screenshots
            feature is my favorite option) and how much time is spent on a particular project. The ability to send invoice from software is a very good solution. 
            This software contains many features, and it really saves time and money, respectively.`,
            webSite: 'www.linkedin.com',
            webSiteUrl: 'https://www.linkedin.com/in/oksana-yurdiha-b9007636/'
        },
        {
            avatar: 'https://www.webwork-tracker.com/images/rebranding/homepage/reviews/review2.png',
            name: 'KAMALA CHAMBERS',
            id: 1,
            title: 'Passive Income Consultant, CEO Thriving Launch',
            text: `Using this powerful software allows me the freedom to be more hands off with my team. The screenshot feature makes it clear where my team is 
            spending their time. It even tracks productivity! WebWork Tracker is a superior software that I recommend to everyone who is managing a team of any size.
            This tool saves time and money.`,
            webSite: 'www.thrivinglaunch.com',
            webSiteUrl: 'https://thrivinglaunch.com/'
        },
        {
            avatar: 'https://www.webwork-tracker.com/images/rebranding/homepage/reviews/review3.png',
            name: 'BORIS HRBACEK',
            id: 2,
            title: 'WordPress Consultant & Growth Hacker Team WP Sekure',
            text: `WebWork Tracker is an excellent choice for small teams with remote workers. Being able to accurately track not only hours worked, but also activity
            levels with screenshots really helps to identify what your team is working on and for how long. It can really help to differentiate the ‘non-committed’ employees 
            from the ‘committed’ ones. The reporting features are great and you can also view time in decimal format, which I have not seen on other software. WebWork Tracker 
            is priced fairly per team member and is an excellent choice for a time tracking software.`,
            webSite: 'www.teamwpsekure.com',
            webSiteUrl: 'https://www.teamwpsekure.com/'
        },
    ],
    customerBlockDatas2: [
        {
            avatar: 'https://www.webwork-tracker.com/images/rebranding/homepage/reviews/review4.png',
            name: 'KASPAR L. PALGI',
            id: 0,
            title: 'Founder GCM Holding LLC',
            text: `I have used most of the time tracking software out there by now and WebWork Tracker is the best one. The main feature that others
            are missing is the ability to delete time not worked on the project. WebWork Tracker is most cost effective software compared to others,
            as great project management, roles/permissions & invoicing functionality.`,
            webSite: 'e-stonia.co.uk',
            webSiteUrl: 'https://e-stonia.co.uk/'
        },
        {
            avatar: 'https://www.webwork-tracker.com/images/rebranding/homepage/reviews/review5.png',
            name: 'UMA ARAVIND',
            id: 1,
            title: 'Business Development ManagerDigitalSEO',
            text: `We have been using WebWork Time Tracker since the past few years and have found it to be instrumental and effective than any other time tracking 
            software in the market. The App and Website Usage Monitoring facility gives us a bird’s eye view of who does what in the organisation and the online reports 
            feature helps us to prepare reports in no time to the client. We would certainly recommend this amazing software to anyone who needs to manage a team.`,
            webSite: 'www.digitalseo.in/',
            webSiteUrl: 'https://www.digitalseo.in/'
        },
        {
            avatar: 'https://www.webwork-tracker.com/images/rebranding/homepage/reviews/review6.png',
            name: 'MICHIEL BROEK',
            id: 2,
            title: 'Web & E-commerce Manage Hakvoort Professional BV',
            text: `WebWork Time Tracker is an awesome tool. It has been 8 months since we are using WebWork Time Tracker in our team. And I can tell you just one thing:
            our company has increased the profitability by 25% since then. This is all you need to know how WebWork Time Tracker can affect your business`,
            webSite: 'www.hakpro.nl/',
            webSiteUrl: 'https://www.hakpro.nl/'
        },
    ],

}


export type InitialStateType = typeof initialState;


export const customersReducer = (state = initialState, action: []): InitialStateType => {
    switch ('') {
        case '':
            return state
        default:
            return state
    }
}


