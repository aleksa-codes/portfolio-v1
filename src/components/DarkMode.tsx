import styles from '../styles/DarkMode.module.css';
import { Sun, Moon } from 'tabler-icons-react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const DarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={styles.button}
      aria-label='Toggle dark or light mode'
      onClick={
        resolvedTheme === 'light'
          ? () => setTheme('dark')
          : () => setTheme('light')
      }
    >
      {resolvedTheme === 'light' ? (
        <Moon size={32} strokeWidth={2} />
      ) : (
        <Sun size={32} strokeWidth={2} />
      )}
    </button>
  );
};

export default DarkMode;
