import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectColor } from '../../../../redux/selectors/content-selector';
import { selectTrackingBlocksDatas } from '../../../../redux/selectors/tracking-selector';
import s from './Tracking.module.scss';
import TrackingBlock from './TrackingBlock/TrackingBlock';
import trackingImg from '../../../../images/tracking.png';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-scroll';

const Tracking: FC = () => {

    const selectedColor = useSelector(selectColor);
    const trackingBlocksDatas = useSelector(selectTrackingBlocksDatas);
    const [hover, setHover] = useState<boolean>(false)

    const trackingBlocks = trackingBlocksDatas.map((t) => {
        return <TrackingBlock key={t.id} title={t.title} text={t.text} />
    })

    useEffect(() => {
        Aos.init({})
    })

    return (
        <div className={s.tracking}>
            <div className={s.goToTracking} id={'Tracking'}></div>
            <div className={s.trackingBody}>
                <div className={s.leftSide} data-aos={'fade-right'} data-aos-duration={800}>
                    <img src={trackingImg} alt="trackingImg" />
                </div>
                <div className={s.rightSide}>
                    <h1>
                        Time <span style={{ color: selectedColor }}> Tracking </span>
                    </h1>
                    <div className={s.title}>
                        WebWork is a cross-platform tracking tool which helps you to accurately track your working day by monitoring all
                        activities. We offer time tracking for 4 different platforms and the specifications for each of them are the following:
                    </div>
                    <div className={s.trackingBlocks}>
                        {trackingBlocks}
                    </div>
                    <div className={s.startTrackingButton}
                        style={{ background: hover ? selectedColor : '#36424D' }}
                        onMouseOver={() => {
                            setHover(true)
                        }}
                        onMouseLeave={() => {
                            setHover(false)
                        }}>
                        <Link activeClass={s.active} to={'Screenshots'} delay={200} spy={true} smooth={true} duration={300}>
                            let's start tracking
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tracking