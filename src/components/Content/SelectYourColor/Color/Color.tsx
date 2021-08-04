import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../../../redux/content-reducer';
import s from './Color.module.scss';

interface ColorProps {
    color: string
}

const Color: FC<ColorProps> = ({ color }) => {

    const dispatch = useDispatch()

    return (
        <div style={{ background: color }} className={s.color} onClick={() => {
            dispatch(actions.setColor(color))
        }}>
        </div>
    )
}

export default Color