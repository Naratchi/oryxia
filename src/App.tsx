import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useParams } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'

let lenisInstance: InstanceType<typeof Lenis> | null = null
// @ts-ignore
import SplashCursor from './components/SplashCursor/SplashCursor'
import PageLoader from './components/PageLoader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projets from './pages/Projets'
import ProjetDetail from './pages/ProjetDetail'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])
  return null
}

function ProjetDetailRoute() {
  const { slug } = useParams()
  return <ProjetDetail key={slug} />
}

function AppInner() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true })
    lenisInstance = lenis

    lenis.on('scroll', () => {
      window.dispatchEvent(new Event('scroll'))
    })

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisInstance = null
    }
  }, [])

  return (
    <>
      <SplashCursor SPLAT_RADIUS={0.15} SPLAT_FORCE={5000} COLOR_UPDATE_SPEED={8} DENSITY_DISSIPATION={3} VELOCITY_DISSIPATION={1.8} TRANSPARENT={true} />
      <PageLoader />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/projets/:slug" element={<ProjetDetailRoute />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  )
}
