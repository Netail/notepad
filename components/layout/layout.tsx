import { FC } from 'react';
import Footer from '../footer/footer';
import Navigation from '../navigation/navigation';

import css from './layout.module.scss';

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <main className={css.layout}>
            <Navigation />
            { children }
            <Footer />
        </main>
    );
}

export default Layout;
