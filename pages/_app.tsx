import '../styles/globals.scss'
import type { AppProps } from 'next/app';
import Layout from '../components/layout/layout';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Head>
                <link rel='shortcut icon' href='/favicon.ico' />
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}

export default App;
