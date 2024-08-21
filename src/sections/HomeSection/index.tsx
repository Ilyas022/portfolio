import img from '../../assets/photo.jpg'
import Button from '../../components/Button'
import { homeLinks } from '../../utils/mockValues/homeLinks'
import BubbleIcon from './BubbleIcon'
import AboutItem from './AboutItem'
import { aboutInfo } from '../../utils/mockValues/aboutInfo'

const HomeSection: React.FC = (): JSX.Element => {
  return (
    <section className="mt-[92px] mb-8 md:mb-16 relative">
      <div className="xl:max-w-contentWidth w-full mx-auto">
        <img className="w-[250px] h-[250px] block mx-auto mb-10 object-cover rounded-[50%]" src={img} alt="photo" />
        <h2 className="text-center text-2xl sm:text-[27px] md:text-3xl mb-10 font-poppins font-bold">
          Hi, I'm <span className="text-accent">Ilya</span> :&#41;
        </h2>
        <h2 className="text-center text-[42px] sm:text-5xl md:text-6xl lg:text-7xl mb-8 font-poppins font-bold">
          Front-End Developer
        </h2>
        <div className="text-xl flex justify-center gap-4 mb-8">
          <Button color="accent" text="Email me" />
          <Button text="Download CV" />
        </div>
        <div className="flex items-center justify-center gap-5 max-[1000px]:mb-8">
          {homeLinks.map((link, i) => (
            <BubbleIcon key={i} {...link} />
          ))}
        </div>
        <div className="max-w-[90%] mx-auto text-xl spacin tracking-[0.5px] leading-[1.8]">
          {aboutInfo.map((info, i) => {
            return <AboutItem key={i} info={info} />
          })}
        </div>
      </div>
    </section>
  )
}

export default HomeSection
