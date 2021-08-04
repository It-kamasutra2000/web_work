import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectColor } from '../../../../redux/selectors/content-selector';
import s from './Integrations.module.scss';
import integrationImg from '../../../../images/integrations.png';
import integrationImg2 from '../../../../images/integrations-2.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Carousel } from 'antd';
import { Link } from 'react-scroll';


const Integrations: FC = () => {

    const selectedColor = useSelector(selectColor);
    const [hover, setHover] = useState<boolean>(false)


    useEffect(() => {
        Aos.init({
        })
    })

    return (
        <div className={s.integrations}>
             <div className={s.goToIntegrations} id={'Integrations'}></div>
            <div className={s.integrationsBody}>
                <div className={s.leftSide}>
                    <h1 id={'Performance'}>
                        Easy
                        <span style={{ color: selectedColor }}> Integrations </span>
                    </h1>
                    <div className={s.text}>
                        Connect the tools you use on a daily basis to effectively plan your workday and get complete visibility over
                        the time your team spends on projects and tasks. Just choose the app you want to connect with WebWork Tracker
                        and import all your projects, tasks, team members in seconds. You can easily see your tracked hours in your integrated
                        system by installing WebWork Chrome Extension.
                    </div>
                </div>
                <div className={s.rightSide} data-aos={'zoom-in'} data-aos-duration={800}>
                    <Carousel autoplay>
                        <div >
                            <img src={integrationImg} alt="integrationsImg" />
                        </div>
                        <div>
                            <img src={integrationImg2} alt="integrationsImg" />
                        </div>
                    </Carousel>
                    <div className={s.integrationsButton}
                        style={{ background: hover ? '#36424D' : selectedColor }}
                        onMouseOver={() => {
                            setHover(true)
                        }}
                        onMouseLeave={() => {
                            setHover(false)
                        }}>
                        <Link activeClass={s.active} to={'Screenshots'} delay={200} spy={true} smooth={true} duration={300}>
                            lView all integrations
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Integrations