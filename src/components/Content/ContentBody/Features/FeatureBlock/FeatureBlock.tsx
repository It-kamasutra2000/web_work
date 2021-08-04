import { FC } from 'react';
import s from './FeatureBlock.module.scss';
import { RiArrowDownSLine } from 'react-icons/ri';
import { useState } from 'react';
import featuresHover from '../../../../../images/features-hover.png';

interface FeatureBlockProps {
    img: string
    title: string
    text: string
}

const FeatureBlock: FC<FeatureBlockProps> = ({img, title, text}) => {

    const [active, setActive] = useState<boolean>(false);
 
    return (
        <div className={`${s.featureBlock} ${active ? s.active : ''}`} 
        onMouseOver={() => {
            setActive(true)
        }}
        onMouseLeave={() => {
            setActive(false)
        }}>
         {active && <div className={s.featuresHover}>
                <img src={featuresHover} alt="features-hover" />
            </div>}
            <div className={s.img}>
                <img src={img} alt="featureImg" />
            </div>
            <div className={s.title}>
                { title }
            </div>
            {active && <div className={s.text}>
                { text }
            </div>}
            {!active && <div className={s.icon}>
                <RiArrowDownSLine/>
            </div>}
        </div>
    )
}

export default FeatureBlock