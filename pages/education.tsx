import type { NextPage } from 'next';
import TextArea from '../components/textarea/textarea';
import Head from 'next/head';
import { useState } from 'react';

const Education: NextPage = () => {
    const [touched, setTouched] = useState(false);

    return (
        <>
            <Head>
                <title>{touched ? '*' : ''}Education | Maikel van Dort</title>
            </Head>
            <TextArea onChange={() => setTouched(true)}>
                Education...
            </TextArea>
        </>
    );
}

export default Education;
