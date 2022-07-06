import type { NextPage } from 'next';
import Head from 'next/head';
import Interests from '../components/Interests';

const SkillsPage: NextPage = () => (
  <>
    <Head>
      <title>Skills | Aleksa</title>
      <meta name='description' content="Aleksa's skills" />
    </Head>
    <Interests />
  </>
);

export default SkillsPage;
