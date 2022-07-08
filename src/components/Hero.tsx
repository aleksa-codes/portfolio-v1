import styles from '../styles/Hero.module.css';
import 'react-typed/dist/animatedCursor.css';
import { BrandGithub, BrandLinkedin, FileText } from 'tabler-icons-react';
import Typed from 'react-typed';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageTransition from './PageTransition';

const text = 'Hello World';

const Hero = () => {
  return (
    <PageTransition>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          <Typed
            className={styles.helloWorld}
            strings={[text]}
            typeSpeed={192}
            loop={false}
          />
          <motion.div
            className={styles.image}
            initial={{ scale: 0 }}
            animate={{
              scale: [0, 0.5, 1],
              rotate: [0, 14, -8, 14, -4, 10, 0, 0]
            }}
            transition={{
              scale: { duration: 0.75, ease: 'easeInOut', delay: 2.75 },
              rotate: {
                duration: 2.5,
                ease: 'easeOut',
                delay: 3.5,
                repeat: 3,
                repeatDelay: 4
              }
            }}
          >
            <Image
              className={styles.wavingHandEmoji}
              src='/waving-hand.webp'
              alt='waving hand'
              width={48}
              height={48}
              layout='fixed'
            />
          </motion.div>
        </h1>
        <h1 className={styles.whatsMyName}>My name is Aleksa</h1>

        <h2 className={styles.heroSubTitle}>
          I design and build{' '}
          <span className='underline'>things for the web.</span>
        </h2>
        <h3>Computer Science Student and Web Developer. Based in Belgrade.</h3>
        <div className='social'>
          <a href='https://github.com/aleksastojsic' target='_noblank'>
            <BrandGithub size={60} strokeWidth={2} />
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/aleksa-stojsic/'
            target='_noblank'
          >
            <BrandLinkedin size={60} strokeWidth={2} />
            Linkedin
          </a>
          <a href='https://aleksastojsic.github.io/resume/' target='_noblank'>
            <FileText size={60} strokeWidth={2} />
            Resume
          </a>
        </div>
      </section>
    </PageTransition>
  );
};

export default Hero;
