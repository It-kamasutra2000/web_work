import ContactUs from './ContactUs/ContactUs';
import s from './Header.module.scss';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';


const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.headerBody}>
                <div className={s.leftSide}>
                <Logo />
                <Menu />
                </div>
                <div className={s.rightSide}>
                    <ContactUs/>
                </div>
            </div>
        </div>
    )
}

export default Header