import {FC} from 'react'
import './App.css'
import heroPNG from './assets/hero.png'
import Header from './components/Header'
import Button from './components/Button'
import {tick, coffee} from './assets'
import Title from './components/Title'
import { projectList } from './data'
import ProjectItem from './components/ProjectItem'
import Contacts from './components/Contacts'
import AboutMe from './components/AboutMe'

const App:FC = () => {

  return (
   <div className='App'>
    <div className="container">
      <Header/>
      <div className='hero'>
        <div className='heroInfo'>
          <div className='heroTitle'>
            <h1>ALIBEK</h1>
            <h1>FRONTEND</h1>
            <h1>DEVELOPER</h1>
          </div>
          <div className='heroButtons'>
            <a href='https://wa.me/+77002274659'>
              <Button text='HIRE ME' color='#F40B5F' icon={tick}/>
            </a>
            <a href="#projects">
              <Button text='PROJECTS' icon={coffee}/>
            </a>
          </div>
        </div>
        <img className='heroImg' src={heroPNG} alt="" />
      </div>
      <hr />
    </div>
    <div id="projects">
      <Title title='projects'/>
    </div>
    <div className="container">
      <div className='projects'>
        {projectList.map(project => 
          <ProjectItem project={project} key={project.title}/>  
        )}
      </div>
    </div>
    <div id="contacts">
      <Title title='contacts'/>
    </div>
    <div className='container'>
          <Contacts/>
    </div>
    <div id="aboutme">
      <Title title='about me'/>
    </div>
    <div className="container">
      <AboutMe/>
    </div>
   </div>
  )
}

export default App
