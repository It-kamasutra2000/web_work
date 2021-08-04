import { FC } from 'react';
import s from './CustomerBlock.module.scss';


interface CustomerBlockProps {
    avatar: string
    name: string
    title: string
    text: string
    webSiteName: string
    webSiteUrl: string
}

const CustomerBlock: FC<CustomerBlockProps> = ({ avatar, name, text, title, webSiteName, webSiteUrl }) => {
    return (
        <div className={s.customerBlock}>
            <div className={s.avatar}>
                <img src={avatar} alt='avatar' />
            </div>
            <div className={s.name}>
                {name}
            </div>
            <div className={s.title}>
                {title}
            </div>
            <div className={s.img}>
                <img src='https://www.webwork-tracker.com/images/rebranding/homepage/icons/quote.png' alt='img' />
            </div>
            <div className={s.text}>
                {text}
            </div>
            <div className={s.webSite}>
                <a href={webSiteUrl} target={'_blank'} rel='noreferrer'>
                    {webSiteName}
                </a>
            </div>
        </div>
    )
}

export default CustomerBlock;