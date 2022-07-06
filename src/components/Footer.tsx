import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* <div className={styles.year}>©{n}</div> */}
      <div className={styles.footerLinks}>
        <Link href='/'>
          <a className={styles.logoFooter}>as.</a>
        </Link>

        <div className={styles.rightFooterLinks}>
          <Link href='/privacy'>
            <a className={styles.privacy}>Privacy</a>
          </Link>
          <Link href='/imprint'>
            <a className={styles.imprint}>Imprint</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
