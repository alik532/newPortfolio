import {FC} from 'react'
import classes from '../styles/AboutMe.module.css'
import journeyPNG from '../assets/myJourney.jpg'
import { cars, games, gym, coding, paint } from '../assets'


const AboutMe:FC = () => {

	const interests: { name: string, icon: string }[] = [
		{name: "cars", icon: cars},
		{name: "coding", icon: coding},
		{name: "gym", icon: gym},
		{name: "painting", icon: paint },
		{ name:"games",icon : games}
	]

  return (
	<div className={classes.about}>
		<div className={classes.journey}>
			<div className={classes.info}>
				<h1 className={classes.title}>MY DEVELOPER JOURNEY</h1>
				<p className={classes.text}>My first "Hello World!" I wrote in 8th grade in JavaScript. Since then, I have been interested in programming and have tried to learn HTML and CSS. But to be honest, I wasn't super serious about my education, and also computer games seemed more fun to me. I just kept in mind that coding is going to be my future career. After I passed the United Test and had to choose which university to enroll in, I started to learn C++, since it was necessary for the entrance exam of IITU. During the first two semesters, I was doing algorithmic tasks and learned the basics of OOP. Then I wanted to become a backend developer and learned python and Django framework. Also, the basic of Databases and how web works. After many projects, I realized that backend isn't for me. That I don't really get exited about my projects. There were even times when I thought that coding is not for me. So I decided to try frontend. I started with the basics. HTML, CSS, Javascript was very easy for me and, I think it was because of my experience in it many years ago. As soon as I started learning React, I realized that I want to become a front-end developer. Every day I am working on my projects, and I am confident that I will stick to front-end for a pretty long time.</p>
			</div>
			<img className={classes.img} src={journeyPNG} alt="" />
		</div>
		<div className={classes.additional}>
			<div className={classes.title}>MY BACKGROUND</div>
			<p className={classes.text}>
				I'm from a small town called Ayagoz in east Kazakhstan. I spent most of my life there, and this town greatly influenced the formation of my personality. I studied in the most ordinary school and was never famous for good academic performance or initiative skills. My life seemed to go with the flow, and I didn’t really realize what I want from life. I spent almost the entire school period playing computer games, and everything else that I occasionally did, such as drawing and programming, did not give me much pleasure. However, as I got older, my ambitions were getting more extensive. I was pretty sure that I wouldn't stay in that town, and my future career would be related to computers. The thing is, I wasn't taking any steps to change my life. But at the beginning of the 11th grade, something changed. I faced reality and realized all the responsibility that lies with me. I realized that confidence alone is absolutely not enough for success. I admitted that if I didn't start taking action, all of my ambitions would be shattered. The fear of disappointing my family and, more importantly - myself pushed me to study and conquer challenges. Since then, I have been working on myself every single day to achieve all the goals I have in my mind.
			</p>
			<div className={classes.title}>MY INTERESTS</div>
			<div className={classes.interests}>
				{interests.map(interest =>
					<div className={classes.interest}>
						<img src={interest.icon} className={classes.icon} alt="" />
						<h1 className={classes.interestName}>{interest.name}</h1>
					</div>	
				)}
			</div>
		</div>
	</div>
  )
}

export default AboutMe