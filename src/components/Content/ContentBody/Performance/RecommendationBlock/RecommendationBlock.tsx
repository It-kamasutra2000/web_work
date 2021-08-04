import { FC } from 'react';
import s from './RecommendationBlock.module.scss';

interface RecommendationBlockProps {
    img: string
    title: string
    text: string
}

const RecommendationBlock: FC<RecommendationBlockProps> = ({ img, title, text }) => {

    return (
        <div className={s.recommendationBlock}>
            <div className={s.img}>
                <img src={img} alt="recommendationImg" />
            </div>
            <div className={s.title}>
                { title }
            </div>
            <div className={s.text}>
                { text }
            </div>
        </div>
    )
}

export default RecommendationBlock