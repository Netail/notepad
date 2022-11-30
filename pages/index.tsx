import type { NextPage } from 'next';
import TextArea from '../components/textarea/textarea';
import Head from 'next/head';
import { useState } from 'react';
import Navigation from '../components/navigation/navigation';
import Footer from '../components/footer/footer';
import { useRouter } from 'next/router';

import css from '../styles/index.module.scss';

const Home: NextPage = () => {
    const router = useRouter();
    const [touched, setTouched] = useState(false);

    return (
        <>
            <Head>
                <title>{touched ? '*' : ''}Untitled - Notepad</title>
                <link rel='shortcut icon' href={`${router.basePath}/favicon.ico`} />
            </Head>
            <main className={css.layout}>
                <Navigation />
                <TextArea onChange={() => setTouched(true)} defaultValue='Hello world!' />
                <Footer />
            </main>

        </>
    );
}

export default Home;
