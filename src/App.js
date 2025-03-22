import React from 'react'
import Loading from './component/Loading'
import Hero from './component/Hero'
import About from './component/About'
import MoreProjects from './component/moreProjects'
import Think from './component/Think'
import Identity from './component/Identity'
import Question from './component/Question'
import Footer from './component/Footer'
import Dev from './component/Dev'
import ThemeToggle from './component/ThemeToggle'
import Overlays from './component/Overlays'


function App() {
  return (
    <>
    {/* <Loading></Loading> */}
    <Overlays></Overlays>
    <Hero></Hero>
    <About></About>
    {/* here is the highlights */}
    <MoreProjects></MoreProjects>
    <Think></Think>
    <Identity></Identity>
    <Question></Question>
    <Dev></Dev>
    {/* <Footer></Footer>     */}
    </>
  )
}

export default App
