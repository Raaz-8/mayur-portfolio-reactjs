import React from 'react'
import Header from './components/Header/header'
import Nav from './components/Nav/nav'
import About from './components/About/about'
import Exp from './components/Experience/exp'
import Cert from './components/certifications/cert'
import Portfolio from './components/Portfolio/pf'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Exp/>
        <Cert/>
        <Portfolio/>
        <Contact/>
        <Footer/>


    </>
  )
}

export default App