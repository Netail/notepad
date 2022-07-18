import { FC, useEffect, useState } from 'react';
import FooterItem from '../footer-item/footer-item';

import css from './footer.module.scss';

const Footer: FC = () => {
    const [platform, setPlatform] = useState('Unknown');
    const [zoomLevel, setZoomLevel] = useState(100);

    useEffect(() => {
        setZoomLevel(Math.round(window.devicePixelRatio * 100));
        setPlatform(window.navigator.userAgentData?.platform || window.navigator.platform || 'Unknown');
    }, []);

    return (
        <div className={css.footer}>
            <FooterItem label='Ln 1, Col 1' />
            <FooterItem label={`${zoomLevel}%`} />
            <FooterItem label={`${platform} (CLRF)`} />
            <FooterItem label='URF-8' />
        </div>
    );
}

export default Footer;
