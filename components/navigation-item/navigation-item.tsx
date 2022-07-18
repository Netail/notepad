import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import css from './navigation-item.module.scss';

interface NavigationItemProps {
    href: string;
    label: string;
}

const NavigationItem: FC<NavigationItemProps> = ({ href, label }) => {
    const router = useRouter();

    const classes = classNames(
        css.item,
        router.pathname == href && css.active,
    )

    return (
        <Link href={href}>
            <a className={classes}>{ label }</a>
        </Link>
    );
}

export default NavigationItem;
