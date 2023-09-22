import {FC, useState} from 'react'
import classes from '../styles/ProjectItem.module.css'
import { IProject } from '../types'
import {arrow, code} from '../assets'
import Button from './Button'

interface IProjectItem {
	project: IProject,
}

const ProjectItem:FC<IProjectItem> = ({project}) => {

	const [onExplore, setOnExplore] = useState(true)

	const backgroundGradient = {
		background: `radial-gradient(ellipse at bottom, ${project.color} 0%, #121212 70%)`,
	}

  return (
	<div className={classes.item}>
		<img className={classes.img} src={project.img} alt="" style={{backgroundColor: project.color, border: `2px ${project.color} solid`}}/>
		<div className={classes.projectInfo}>
			<div className={classes.texts}>
				<h1 className={classes.title}>{project.title}</h1>
				<h4 className={classes.description}>{project.description}</h4>
			</div>
			<div className={classes.controls}>
				<div className={classes.techList}>{project.techs.map(tech => 
					<Button icon={tech.logo} color={tech.color}/>
				)}</div>
				<div className={classes.buttons}>
					<a href={project.site} className={classes.action}>
						<button onMouseEnter={() => setOnExplore(true)} className={[classes.explore, onExplore ? classes.exploreExpand : classes.exploreCollapse].join(" ")}><h1>EXPLORE</h1><img src={arrow} alt="" /></button>
					</a>
					<a href={project.sourceCode} className={classes.action}>
						<button onMouseEnter={() => setOnExplore(false)} className={[classes.code, !onExplore ? classes.codeExpand : classes.codeCollapse].join(" ")}><h1>CODE</h1><img src={code} alt="" /></button>
					</a>
				</div>
			</div>
		</div>
		<div className={classes.background} style={backgroundGradient}></div>
	</div>
  )
}

export default ProjectItem