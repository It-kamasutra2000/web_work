import { FC } from 'react';
import s from './Page.module.scss';
import { Link } from 'react-scroll';

interface PageProps {
    pageName: string
}

const Page: FC<PageProps> = ({ pageName }) => {

    return (
        <div className={s.page}>
            <Link to={`${pageName}`} activeClass={s.active} delay={200} spy={true} smooth={true} duration={300}>
                {pageName}
            </Link>
        </div>
    )
}

export default Page