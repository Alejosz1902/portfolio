import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'
import Jumbotron from './components/jumbotron.jsx'
import Projects from './components/projects.jsx'
import Stack from './components/stack.jsx'
import About from './components/about.jsx'
import Contact from './components/contact.jsx'
import Footer from './components/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Jumbotron />
    <Projects />
    <Stack />
    <About />
    <Contact />
    <Footer />
  </StrictMode>,
)
