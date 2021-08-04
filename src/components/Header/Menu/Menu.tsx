import { useSelector } from 'react-redux';
import { selectPageNames } from '../../../redux/selectors/content-selector';
import s from './Menu.module.scss';
import Page from './Page/Page';

const Menu = () => {

    const pageNames = useSelector(selectPageNames);

    const pages = pageNames.map((p) => {
        return <Page key={p} pageName={p} />
    })

    return (
        <div className={s.menu}>
            <div className={s.pages}>
                {pages}
            </div>
        </div>
    )
}

export default Menu