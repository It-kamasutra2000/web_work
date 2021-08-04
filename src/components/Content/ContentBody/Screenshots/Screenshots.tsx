import { useSelector } from 'react-redux';
import { selectColor } from '../../../../redux/selectors/content-selector';
import EmailForm from './EmailForm/EmailForm';
import s from './Screenshots.module.scss';
import Image from './Image/Image';
import homeImg from '../../../../images/homeImg.png';
import homeImg2 from '../../../../images/homeImg2.png';
import homeImg3 from '../../../../images/homeImg3.png';
import homeImg4 from '../../../../images/homeImg4.png';
import { selectImages } from '../../../../redux/selectors/screenshots-selector';


const Screenshots = () => {

    const selectedColor = useSelector(selectColor);
    const imageUrls = useSelector(selectImages)

    const images = imageUrls.map((i) => {
        return <Image key={i.id} url={i.url} image={i.image} />
    })

    return (
        <div className={s.home}>
             <div className={s.goToScreenshots} id={'Screenshots'}></div>
            <div className={s.topSide}>
                <div className={s.leftSide}>
                    <h1>
                        TIME TRACKER WITH
                        <span style={{ color: selectedColor }}> SCREENSHOTS</span>
                    </h1>
                    <div className={s.text}>
                        Time Tracking and Employee Monitoring software for companies
                        and remote teams. <span>7400+</span> teams increased their performance with the help of our core features:
                    </div>
                    <ul style={{ color: selectedColor }}>
                        <li>
                            <span> Employee monitoring </span>
                        </li>
                        <li>
                            <span> Time tracking </span>
                        </li>
                        <li>
                            <span>  Project management </span>
                        </li>
                    </ul>
                    <EmailForm />
                    <div className={s.creditCard}>
                        <a href={'https://www.webwork-tracker.com/how-pricing-works'} target={'_blank'} rel="noreferrer" >
                            No credit card required. Use 30 days then decide to pay or not
                        </a>
                    </div>
                </div>
                <div className={s.rightSide}>
                    <div className={s.homeImg1}>
                        <img src={homeImg} alt="homeImg" />
                    </div>
                    <div className={s.homeImg2}>
                        <img src={homeImg2} alt="homeImg" />
                    </div>
                    <div className={s.homeImg3}>
                        <img src={homeImg3} alt="homeImg" />
                    </div>
                    <div className={s.homeImg4}>
                        <img src={homeImg4} alt="homeImg" />
                    </div>
                </div>
            </div>
            <div className={s.bottomSide}>
                <div className={s.images}>
                    {images}
                </div>
            </div>
        </div>
    )
}

export default Screenshots