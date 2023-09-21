import { FC, useState } from 'react'
import classes from '../styles/Button.module.css'

interface IButton {
	text?: string,
	icon?: string,
	color?: string,
}

const Button:FC<IButton> = ({text, icon, color = "#ffffff"}) => {

	const [isBooped, setIsBooped] = useState(false);
	const style = {
		border: `${color} 2px solid`,
		boxShadow: `${color}60 0px ${isBooped ? "9px" : "6px"} 18px 0px`,
		background: `radial-gradient(circle at bottom, ${color}50, #121212 ${isBooped ? "100%" : "70%"})`,
	};

	const onHover = () => {
		setIsBooped(true);
	};
	const onUnhover = () => {
		setIsBooped(false)
	}

	return (
		<div className={classes.button} style={style} onMouseEnter={onHover} onMouseLeave={onUnhover}>
			{text && <div className="buttonText" style={{color}}>
				{text}
			</div>}
			{icon && <img alt='' src={icon}/>}
		</div>
	)
}

export default Button