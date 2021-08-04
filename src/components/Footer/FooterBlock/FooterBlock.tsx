import React, { FC } from 'react';
import { Link } from 'react-scroll';
import s from './FooterBlock.module.scss';

interface FooterBlockProps {
    title: string
    sectionNames: string[]
}

const FooterBlock: FC<FooterBlockProps> = React.memo(({ title, sectionNames }) => {

    const sections = sectionNames.map((se) => {
        return <div className={s.sectionName}>
            <Link activeClass={s.active} to={'Screenshots'} delay={200} spy={true} smooth={true} duration={300}>
                {se}
            </Link>
        </div>
    })

    return (
        <div className={s.footerBlock}>
            <div className={s.title}>
                {title}
            </div>
            <div className={s.sections}>

                {sections}

            </div>
        </div>
    )
})

export default FooterBlock;