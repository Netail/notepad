import type { NextPage } from 'next';
import TextArea from '../components/textarea/textarea';
import Head from 'next/head';
import { useState } from 'react';

const Experience: NextPage = () => {
    const [touched, setTouched] = useState(false);

    return (
        <>
            <Head>
                <title>{touched ? '*' : ''}Experience | Maikel van Dort</title>
            </Head>
            <TextArea onChange={() => setTouched(true)} defaultValue='Experience...' />
        </>
    );
}

export default Experience;
