import s from './Content.module.scss';
import ContentBody from './ContentBody/ContentBody';
import SelectYourColor from './SelectYourColor/SelectYourColor';

const Content = () => {
    return (
        <div id={'Home'} className={s.content}>
            <SelectYourColor/>
            <ContentBody/>
        </div>
    )
}

export default Content