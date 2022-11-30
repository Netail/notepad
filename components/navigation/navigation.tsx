import { FC } from 'react';
import NavigationItem from '../navigation-item/navigation-item';

import css from './navigation.module.scss';

const Navigation: FC = () => {
    return (
        <nav className={css.navigation}>
            <NavigationItem label='File' />
            <NavigationItem label='Edit' />
            <NavigationItem label='Format' />
            <NavigationItem label='View' />
            <NavigationItem label='Help' />
        </nav>
    );
}

export default Navigation;
