import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectColor } from '../../../../redux/selectors/content-selector';
import { selectRecommendationBlockDatas } from '../../../../redux/selectors/performance-selector';
import s from './Performance.module.scss';
import RecommendationBlock from './RecommendationBlock/RecommendationBlock';

const Performance: FC = () => {
    
    const selectedColor = useSelector(selectColor);
    const recommendationBlockDatas = useSelector(selectRecommendationBlockDatas);

    const recommendationBlocks = recommendationBlockDatas.map((r) => {
        return <RecommendationBlock key={r.title} img={r.image} title={r.title} text={r.text}/>
    })

 
    return (
        <div className={s.performance}>
            <div className={s.goToPerformance} id={'Performance'}>
                
            </div>
            <h1>
                The Best Ever Formula To 
               <span style={{ color: selectedColor }}> Increased Performance </span>
            </h1>
            <div className={s.recommendationBlocks}>
                {recommendationBlocks}
            </div>
        </div>
    )
}

export default Performance