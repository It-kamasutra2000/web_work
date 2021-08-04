import s from './Logo.module.scss';
import logo from '../../../images/logo.svg'
import { Link } from 'react-scroll';

const Logo = () => {
    return (
        <div className={s.logo}>
             <Link to={'Screenshots'} activeClass={s.active} delay={200} spy={true} smooth={true} duration={300}>
                <img src={logo} alt="logo" />
           </Link>
        </div>
    )
}

export default Logo