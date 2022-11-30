import { FC } from 'react';

import css from './navigation-item.module.scss';

interface NavigationItemProps {
    label: string;
}

const NavigationItem: FC<NavigationItemProps> = ({ label }) => {
    return (
        <span className={css.item}>{ label }</span>
    );
}

export default NavigationItem;
