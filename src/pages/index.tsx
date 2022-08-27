import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/Hero';

const Home: NextPage = () => (
  <>
    <Head>
      <title>aleksa.codes</title>
      <meta name='robots' content='noindex,nofollow' />
      <meta name='googlebot' content='noindex,nofollow' />
      <meta name='description' content="Aleksa's personal website" />
      <link rel='canonical' href='https://aleksa.vercel.app' />
    </Head>
    <Hero />
  </>
);
export default Home;
