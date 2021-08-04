import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectColor } from '../../../../redux/selectors/content-selector';
import s from './Customers.module.scss';
import CustomerBlocks from './CustomerBlocks/CustomerBlocks';
import { Link } from 'react-scroll';


const Customers: FC = () => {

    const selectedColor = useSelector(selectColor);
    const [hover, setHover] = useState<boolean>(false)

    return (
        <div className={s.customers}>
            <div className={s.goToCustomers} id={'Customers'}></div>
            <h1>
                Loved by <span style={{ color: selectedColor }}>customers</span>
            </h1>
            <CustomerBlocks />
            <div className={s.startFreeTrial}
                style={{ background: hover ? selectedColor :'#36424D'}}
                onMouseOver={() => {
                    setHover(true)
                }}
                onMouseLeave={() => {
                    setHover(false)
                }}>
                <Link activeClass={s.active} to={'Screenshots'} delay={200} spy={true} smooth={true} duration={300}>
                    Start my free trial
                </Link>
            </div>
        </div>
    )
}

export default Customers