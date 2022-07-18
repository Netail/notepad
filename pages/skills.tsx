import type { NextPage } from 'next';
import TextArea from '../components/textarea/textarea';
import Head from 'next/head';
import { useState } from 'react';

const Skills: NextPage = () => {
    const [touched, setTouched] = useState(false);

    return (
        <>
            <Head>
                <title>{touched ? '*' : ''}Skills | Maikel van Dort</title>
            </Head>
            <TextArea onChange={() => setTouched(true)}>
                Skills...
            </TextArea>
        </>
    );
}

export default Skills;
