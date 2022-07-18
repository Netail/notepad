import { FC } from 'react';
import NavigationItem from '../navigation-item/navigation-item';

import css from './navigation.module.scss';

const Navigation: FC = () => {
    return (
        <div className={css.navigation}>
            <NavigationItem href='/' label='Home' />
            <NavigationItem href='/about' label='About' />
            <NavigationItem href='/experience' label='Experience' />
            <NavigationItem href='/education' label='Education' />
            <NavigationItem href='/skills' label='Skills' />
        </div>
    );
}

export default Navigation;
