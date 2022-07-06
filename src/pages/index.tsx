import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/Hero';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Home | Aleksa</title>
      <meta name='description' content="Aleksa's homepage" />
    </Head>
    <Hero />
  </>
);
export default Home;
