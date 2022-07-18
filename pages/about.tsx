import type { NextPage } from 'next';
import TextArea from '../components/textarea/textarea';
import Head from 'next/head';
import { useState } from 'react';

const About: NextPage = () => {
    const [touched, setTouched] = useState(false);

    return (
        <>
            <Head>
                <title>{touched ? '*' : ''}About | Maikel van Dort</title>
            </Head>
            <TextArea onChange={() => setTouched(true)} defaultValue='About...' />
        </>
    );
}

export default About;
