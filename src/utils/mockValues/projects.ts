import blogImg from '../../assets/img/blogBg.png'
import nextBlogImg from '../../assets/img/nextBlogImg.png'
import currencyTrackerImg from '../../assets/img/currencyTrackerImg.png'
import youtubeImg from '../../assets/img/youtubeImg.png'

export const projects = [
  {
    name: 'Simple Next js blog application',
    link: 'https://client-blog-ilyas022s-projects.vercel.app/en',
    img: nextBlogImg,
    technologies: 'Next.js, TS, next-intl, mapbox',
    description: 'Just an example of a simple next js blog application',
  },
  {
    name: 'Currency Tracker',
    link: 'https://currency-tracker-chi.vercel.app/',
    img: currencyTrackerImg,
    technologies: 'React, redux, ts, mapbox, chart js',
    description: 'An application to monitor cost of currencies and crypto currencies',
  },
  {
    name: 'Youtube',
    link: 'https://youtube-alpha-seven.vercel.app/',
    img: youtubeImg,
    technologies: 'React, redux, ts,',
    description:
      'An application similar to YouTube, which enables you to watch and search videos from youtube with suggestions',
  },
  {
    name: 'Blog application',
    link: 'https://blog-sigma-henna.vercel.app/',
    img: blogImg,
    technologies: ' React, Redux, TS, Tailwind',
    description: 'An application for blogging, where you can read something interesting and find new friends',
  },
]
