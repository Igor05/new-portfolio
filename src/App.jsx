import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CasePage from './pages/CasePage'
import NotFound from './pages/NotFound'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, hash])

  return null
}

function App() {
  const location = useLocation()

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-svh flex-col">
        <a
          href="#main"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:bg-ink focus-visible:px-4 focus-visible:py-2 focus-visible:text-paper"
        >
          Skip to content
        </a>
        <ScrollManager />
        <Header />
        <main id="main" className="flex-1">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: 'easeInOut' }}
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/cases/:slug" element={<CasePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
