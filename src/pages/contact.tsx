import type { NextPage } from 'next';
import Head from 'next/head';
import Contact from '../components/Contact';

const ContactPage: NextPage = () => (
  <>
    <Head>
      <title>Contact | Aleksa</title>
      <meta name='robots' content='noindex,nofollow' />
      <meta name='googlebot' content='noindex,nofollow' />
      <meta name='description' content="Aleksa's contact information" />
    </Head>
    <Contact />
  </>
);

export default ContactPage;
