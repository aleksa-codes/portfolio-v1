import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';

const AboutPage: NextPage = () => (
  <>
    <Head>
      <title>About | Aleksa</title>
      <meta name='robots' content='noindex,nofollow' />
      <meta name='googlebot' content='noindex,nofollow' />
      <meta name='description' content="Aleksa's about page" />
    </Head>
    <About />
  </>
);

export default AboutPage;
