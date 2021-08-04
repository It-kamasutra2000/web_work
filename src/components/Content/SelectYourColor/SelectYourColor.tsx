import { useState } from 'react';
import Color from './Color/Color';
import s from './SelectYourColor.module.scss';
import { BiDroplet } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { FC } from 'react';
import { selectColors } from '../../../redux/selectors/content-selector';

const SelectYourColor: FC = () => {

    const colorsData = useSelector(selectColors)

    
    const [active, setActive] = useState<boolean>(false);

    const colors = colorsData.map((c) => {
        return <Color color={c} />
    })

    return (
        <div className={`${s.selectYourColor} ${active ? s.active : ''}`}>
            <div className={s.leftSide}>
                <div className={s.title}>
                    Select your color
                </div>
                <div className={s.colors}>
                    {colors}
                </div>
            </div>
            <div className={s.rightSide} onClick={() => {
                setActive(!active);
            }}>
                <div className={s.icon}>
                    <BiDroplet />
                </div>
            </div>
        </div>
    )
}

export default SelectYourColor