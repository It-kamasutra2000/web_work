import { FC } from 'react';
import s from './ContentBody.module.scss';
import Customers from './Customers/Customers';
import Features from './Features/Features';
import Home from './Screenshots/Screenshots';
import Integrations from './Integrations/Integrations';
import Performance from './Performance/Performance';
import Tracking from './Tracking/Tracking';

const ContentBody: FC = () => {
    return (
        <div className={s.contentBody}>
           <Home/>
           <Performance/>
           <Features/>
           <Tracking/>
           <Integrations/>
           <Customers/>
        </div>
    )
}

export default ContentBody