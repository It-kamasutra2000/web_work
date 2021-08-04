import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import {
    selectFooterSection1,
    selectFooterSection2,
    selectFooterSection3,
    selectFooterSection4
} from '../../redux/selectors/footer-selector';
import s from './Footer.module.scss';
import FooterBlock from './FooterBlock/FooterBlock';
import footerLogo from '../../images/logo.svg';
import { Link } from 'react-scroll';


const Footer: FC = React.memo(() => {

    const footS1 = useSelector(selectFooterSection1);
    const footS2 = useSelector(selectFooterSection2);
    const footS3 = useSelector(selectFooterSection3);
    const footS4 = useSelector(selectFooterSection4);


    return (
        <div className={s.footer}>
            <div className={s.footerBody}>
                <div className={s.footerSections}>
                    <FooterBlock title={footS1.title} sectionNames={footS1.sections} />
                    <FooterBlock title={footS2.title} sectionNames={footS2.sections} />
                    <FooterBlock title={footS3.title} sectionNames={footS3.sections} />
                    <FooterBlock title={footS4.title} sectionNames={footS4.sections} />
                </div>
                <div className={s.footerLogo}>
                    <Link activeClass={s.active} to={'Screenshots'} delay={200} spy={true} smooth={true} duration={300}>
                        <img src={footerLogo} alt='footerLogo' />
                    </Link>
                </div>
            </div>
        </div>
    )
})

export default Footer;