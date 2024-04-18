import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectList from './components/ProjectList/ProjectList'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  
  return (
    <>
      <Header />
      <Body />
      <ProjectList id="projects" />
      <Skills id="skills" />
      <Contact id="contact" />
      <Footer />
    </>
  )
}

export default App
