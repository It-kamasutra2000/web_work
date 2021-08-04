import { FC } from 'react';
import s from './TrackingBlock.module.scss';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { selectColor } from '../../../../../redux/selectors/content-selector';

interface TrackingBlockProps {
    title: string
    text: string
}

const TrackingBlock: FC<TrackingBlockProps> = ({text, title}) => {

    const selectedColor = useSelector(selectColor);

   return (
        <div className={s.trackingBlock}>
            <div className={s.topsSections}>
                <div className={s.iconContainer}>
                    <RiArrowDropRightLine style={{color: selectedColor}} className={s.icon}/>
                </div>
                <div className={s.title}>
                    { title }
                </div>
            </div>
            <div className={s.text}>
                { text }
            </div>
        </div>
    )
}

export default TrackingBlock