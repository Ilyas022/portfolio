/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#1D262D',
        primary: '#311996',
        text: '#F8F0E4',
        accent: '#E12179',
        accent2: '#BC1964',
        telegram: '#2867B2',
        telegramBg: 'rgb(17, 90, 177, 0.35)',
        github: '#6E5494',
        githubBg: 'rgba(110, 84, 148, 0.35)',
        email: 'rgba(255, 255, 255, 0.65)',
        emailBg: 'rgba(255, 255, 255, 0.15)',

        bgDark: '#F8F0E4',
        textDark: '#311996',
        githubDark: '#c9510c',
        githubBgDark: 'rgba(201, 81, 12, 0.35)',
        emailDark: '#12100B',
        emailBgDark: 'rgba(18, 16, 11, 0.35)',
      },
      width: {
        maxWidth: '1400px',
        contentWidth: '1238px',
      },
      maxWidth: {
        maxWidth: '1400px',
        contentWidth: '1238px',
      },
      fontFamily: {
        ubuntu: 'ubuntu, sans-serif',
        poppins: 'poppins, sans-serif',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(8px)' },
        },
        appearance: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 2s ease-in-out infinite alternate',
        floatReverse: 'float 2s ease-in-out infinite alternate-reverse',
        appearance: 'appearance 300ms ease-in-out',
        appearanceReverse: 'appearance 300ms ease-in-out reverse',
      },
      transition: {
        burger: 'transition: top 0.3s ease, transform 0.3s 0.3s ease',
      },
    },
  },
  plugins: [],
}
