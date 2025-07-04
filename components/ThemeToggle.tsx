'use client';

import styles from '../styles/Nav.module.scss';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion, stagger } from 'framer-motion';

const ThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [currentTheme, setCurrrentTheme] = useState('');
  const [mounted, setMounted] = useState(false);

  const singleRayVariant = {
    hidden: {
      pathLength: 0,
      opacity: 0,
      scale: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      scale: 1,
    },
  };

  const rayGroupVariants = {
    visible: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    hidden: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  useEffect(() => {
    setMounted(true);
    if (theme == 'system') {
      setCurrrentTheme(systemTheme as string);
      console.log(currentTheme);
    } else {
      setCurrrentTheme(theme as string);
    }
  }, []);

  const handleThemeChange = function (e: React.MouseEvent<HTMLElement>) {
    if (currentTheme === 'light') {
      setTheme('dark');
      setCurrrentTheme('dark');
    } else {
      setTheme('light');
      setCurrrentTheme('light');
    }
  };

  if (!mounted) {
    return <p></p>;
  }

  return (
    <button className={styles.navThemeToggle} onClick={handleThemeChange}>
      <svg
        width="256"
        height="256"
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1004_2)">
          <motion.path
            d={
              currentTheme === 'light'
                ? 'M128 196C165.555 196 196 165.555 196 128C134.461 150.608 107.065 117.201 128 60C90.4446 60 60 90.4446 60 128C60 165.555 90.4446 196 128 196Z'
                : 'M128 196C165.555 196 196 165.555 196 128C196 90.4446 165.555 60 128 60C90.4446 60 60 90.4446 60 128C60 165.555 90.4446 196 128 196Z'
            }
            animate={
              currentTheme === 'dark'
                ? {
                    rotate: '180deg',
                    d: 'M128 196C165.555 196 196 165.555 196 128C196 90.4446 165.555 60 128 60C90.4446 60 60 90.4446 60 128C60 165.555 90.4446 196 128 196Z',
                  }
                : {
                    rotate: 0,
                    d: 'M128 196C165.555 196 196 165.555 196 128C134.461 150.608 107.065 117.201 128 60C90.4446 60 60 90.4446 60 128C60 165.555 90.4446 196 128 196Z',
                  }
            }
            fill={currentTheme === 'dark' ? '#d9d9d9' : '#373737'}
          />
          <motion.g
            animate={theme === 'light' ? 'hidden' : 'visible'}
            variants={rayGroupVariants}
          >
            <motion.path
              variants={singleRayVariant}
              d="M128 44C130.122 44 132.157 43.1571 133.657 41.6569C135.157 40.1566 136 38.1217 136 36V16C136 13.8783 135.157 11.8434 133.657 10.3431C132.157 8.84285 130.122 8 128 8C125.878 8 123.843 8.84285 122.343 10.3431C120.843 11.8434 120 13.8783 120 16V36C120 38.1217 120.843 40.1566 122.343 41.6569C123.843 43.1571 125.878 44 128 44Z"
              fill={currentTheme === 'dark' ? '#d9d9d9' : '#d9d9d900'}
            />
            <motion.path
              variants={singleRayVariant}
              d="M57.2999 68.5999C58.8122 70.0721 60.8394 70.8958 62.9499 70.8958C65.0604 70.8958 67.0876 70.0721 68.5999 68.5999C70.096 67.1002 70.9362 65.0683 70.9362 62.9499C70.9362 60.8315 70.096 58.7997 68.5999 57.2999L54.4999 43.0999C53.7826 42.2259 52.8903 41.5118 51.8804 41.0035C50.8705 40.4952 49.7653 40.2039 48.636 40.1484C47.5067 40.093 46.3783 40.2745 45.3235 40.6815C44.2686 41.0884 43.3106 41.7116 42.5111 42.5111C41.7116 43.3106 41.0884 44.2686 40.6815 45.3235C40.2745 46.3783 40.093 47.5067 40.1484 48.636C40.2039 49.7653 40.4952 50.8705 41.0035 51.8804C41.5118 52.8903 42.2259 53.7826 43.0999 54.4999L57.2999 68.5999Z"
              fill={currentTheme === 'dark' ? '#d9d9d9' : '#d9d9d900'}
              strokeDasharray="3"
            />
            <motion.path
              variants={singleRayVariant}
              d="M44 128C44 125.878 43.1571 123.843 41.6569 122.343C40.1566 120.843 38.1217 120 36 120H16C13.8783 120 11.8434 120.843 10.3431 122.343C8.84285 123.843 8 125.878 8 128C8 130.122 8.84285 132.157 10.3431 133.657C11.8434 135.157 13.8783 136 16 136H36C38.1217 136 40.1566 135.157 41.6569 133.657C43.1571 132.157 44 130.122 44 128Z"
              fill={currentTheme === 'dark' ? '#d9d9d9' : '#d9d9d900'}
            />
            <motion.path
              variants={singleRayVariant}
              d="M57.2999 187.4L43.0999 201.5C41.5976 203.016 40.7549 205.065 40.7549 207.2C40.7549 209.335 41.5976 211.383 43.0999 212.9C44.6465 214.351 46.6795 215.171 48.7999 215.2C50.9242 215.191 52.9642 214.368 54.4999 212.9L68.5999 198.7C69.9788 197.178 70.7196 195.184 70.6691 193.131C70.6185 191.078 69.7804 189.123 68.3284 187.671C66.8763 186.219 64.9214 185.381 62.8684 185.331C60.8155 185.28 58.8217 186.021 57.2999 187.4Z"
              fill={currentTheme === 'dark' ? '#d9d9d9' : '#d9d9d900'}
            />
            <motion.path
              variants={singleRayVariant}
              d="M128 212C125.878 212 123.843 212.843 122.343 214.343C120.843 215.843 120 217.878 120 220V240C120 242.122 120.843 244.157 122.343 245.657C123.843 247.157 125.878 248 128 248C130.122 248 132.157 247.157 133.657 245.657C135.157 244.157 136 242.122 136 240V220C136 217.878 135.157 215.843 133.657 214.343C132.157 212.843 130.122 212 128 212Z"
              fill={currentTheme === 'dark' ? '#d9d9d9' : '#d9d9d900'}
            />
            <motion.path
              variants={singleRayVariant}
              d="M198.7 187.4C197.178 186.021 195.184 185.28 193.131 185.331C191.078 185.381 189.123 186.219 187.671 187.671C186.219 189.123 185.381 191.078 185.331 193.131C185.28 195.184 186.021 197.178 187.4 198.7L201.5 212.9C203.035 214.368 205.075 215.191 207.2 215.2C209.32 215.171 211.353 214.351 212.9 212.9C214.402 211.383 215.245 209.335 215.245 207.2C215.245 205.065 214.402 203.016 212.9 201.5L198.7 187.4Z"
              fill={currentTheme === 'dark' ? '#d9d9d9' : '#d9d9d900'}
            />
            <motion.path
              variants={singleRayVariant}
              d="M240 120H220C217.878 120 215.843 120.843 214.343 122.343C212.843 123.843 212 125.878 212 128C212 130.122 212.843 132.157 214.343 133.657C215.843 135.157 217.878 136 220 136H240C242.122 136 244.157 135.157 245.657 133.657C247.157 132.157 248 130.122 248 128C248 125.878 247.157 123.843 245.657 122.343C244.157 120.843 242.122 120 240 120Z"
              fill={currentTheme === 'dark' ? '#d9d9d9' : '#d9d9d900'}
            />
            <motion.path
              variants={singleRayVariant}
              d="M193.1 70.9005C194.139 70.9097 195.17 70.7109 196.132 70.3159C197.094 69.921 197.967 69.3377 198.7 68.6005L212.9 54.5005C214.175 52.9461 214.827 50.9728 214.729 48.9644C214.63 46.956 213.788 45.056 212.366 43.6342C210.944 42.2123 209.044 41.3701 207.036 41.2715C205.027 41.1728 203.054 41.8248 201.5 43.1005L187.4 57.3005C185.904 58.8002 185.063 60.8321 185.063 62.9505C185.063 65.0689 185.904 67.1007 187.4 68.6005C188.145 69.3499 189.034 69.9402 190.014 70.3356C190.993 70.731 192.043 70.9232 193.1 70.9005Z"
              fill={currentTheme === 'dark' ? '#d9d9d9' : '#d9d9d900'}
            />
          </motion.g>
        </g>
        <defs>
          <clipPath id="clip0_1004_2">
            <rect width="256" height="256" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export default ThemeToggle;
