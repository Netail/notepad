import type { NextPage } from 'next';
import TextArea from '../components/textarea/textarea';
import Head from 'next/head';
import { useState } from 'react';

const Home: NextPage = () => {
    const [touched, setTouched] = useState(false);

    return (
        <>
            <Head>
                <title>{touched ? '*' : ''}Home | Maikel van Dort</title>
            </Head>
            <TextArea onChange={() => setTouched(true)}>
                Hi I&apos;m Maikel van Dort
            </TextArea>
        </>
    );
}

export default Home;
