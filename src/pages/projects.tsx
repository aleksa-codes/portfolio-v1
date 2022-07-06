import type { NextPage } from 'next';
import Head from 'next/head';
import Projects from '../components/Projects';

const ProjectsPage: NextPage = () => (
  <>
    <Head>
      <title>Projects | Aleksa</title>
      <meta name='description' content="Aleksa's projects" />
    </Head>
    <Projects />
  </>
);

export default ProjectsPage;
