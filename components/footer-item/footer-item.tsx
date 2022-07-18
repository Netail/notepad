import { FC } from 'react';

import css from './footer-item.module.scss';

interface FooterItemProps {
    label: string;
}

const FooterItem: FC<FooterItemProps> = ({ label }) => {
    return (
        <div className={css.item}>
            { label }
        </div>
    );
}

export default FooterItem;
