import Hero from '../components/home/Hero'
import Marquee from '../components/home/Marquee'
import FeaturedProjects from '../components/home/FeaturedProjects'
import Services from '../components/home/Services'
import Process from '../components/home/Process'
import Stats from '../components/home/Stats'
import CtaFinal from '../components/home/CtaFinal'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedProjects />
      <Services />
      <Process />
      <Stats />
      <CtaFinal />
    </>
  )
}
