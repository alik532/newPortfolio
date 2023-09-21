import {FC} from 'react'
import classes from '../styles/Header.module.css'

const Header:FC = () => {
  return (
	<div className={classes.header}>
		<div className={classes.links}>
			<a href="#projects" className={classes.headerLink + " buttonText"}>PROJECTS</a>
			<a href="#contacts" className={classes.headerLink  + " buttonText"}>CONTACTS</a>
			<a href="#aboutme" className={classes.headerLink  + " buttonText"}>ABOUT ME</a>
		</div>
		<hr className='line'/>
    </div>
  )
}

export default Header