import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectColor } from '../../../../redux/selectors/content-selector';
import { selectFeatureBlocksDatas } from '../../../../redux/selectors/feature-selector';
import FeatureBlock from './FeatureBlock/FeatureBlock';
import s from './Features.module.scss';

const Features: FC = () => {
    
    const selectedColor = useSelector(selectColor);

    const featureBlocksDatas = useSelector(selectFeatureBlocksDatas)

    const featureBlocks = featureBlocksDatas.map((f) => {
        return <FeatureBlock key={f.id} img={f.img} title={f.title} text={f.text}/>
    })
 
    return (
        
        <div className={s.features}>
             <div className={s.goToFeatures} id="Features"></div>
            <h1 >
            Lead the industry with
               <span style={{ color: selectedColor }}> our features </span>
            </h1>
            <div className={s.featureBlocks}>
                {featureBlocks}
            </div>
        </div>
    )
}

export default Features