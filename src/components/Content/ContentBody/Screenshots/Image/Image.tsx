import { FC } from 'react';
import s from './Image.module.scss';

interface ImageProps {
    image: string
    url: string
}

const Image: FC<ImageProps> = ({ image, url }) => {
    return (
        <div className={s.image}>
            <a href={url} target={'_blank'} rel="noreferrer">
                <img src={image}  alt='img' />
            </a>
        </div>
    )
}

export default Image