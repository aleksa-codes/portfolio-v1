import type { NextPage } from 'next';
import Head from 'next/head';
import Projects from '../components/Projects';

const ProjectsPage: NextPage = () => (
  <>
    <Head>
      <title>Projects | aleksa</title>
      <meta name='robots' content='noindex,nofollow' />
      <meta name='googlebot' content='noindex,nofollow' />
      <meta name='description' content="Aleksa's projects" />
    </Head>
    <Projects />
  </>
);

export default ProjectsPage;
