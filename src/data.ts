import { IProject, IContact } from "./types";
import spotifyPNG from './assets/spotify.png'
import ReactSVG from './assets/react.svg'
import ReduxSVG from './assets/redux.svg'
import RapidapiSVG from './assets/rapidapi.svg'
import TypescriptSVG from './assets/typescript.svg'
import Headhunter from './assets/hh.svg'
import CodewarsSVG from './assets/codewars.svg'
import LeetcodeSVG from './assets/leetcode.svg'
import GithubSVG from './assets/github.svg'
import Linkedin from './assets/linkedin.svg'
import WeatherPNG from './assets/weather.png'
import firebaseSVG from './assets/firebase.svg'
import journeyPNG from './assets/journey.png'

export const projectList:Array<IProject> = [
	{
		title: "Journey gaming library app", 
		techs: [
			{id: "1", name: 'React', logo: ReactSVG, description: "React is a free and open-source front-end JavaScript library for building user interfaces based on components.", color: "#61DAFB"},
			{id: "2", name: 'Redux', logo: ReduxSVG, description: "Redux is an open-source JavaScript library for managing and centralizing application state.", color: "#764ABC"},
			{id: "3", name: 'Rapid API', logo: RapidapiSVG, description: "The API Platform is a multi-cloud, customized hub to find, connect to, and share APIs.", color: "#0055DA"},
			{id: "4", name: 'Typescript', logo: TypescriptSVG, description: "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript.", color: "#3178C6"},
			{id: "5", name: "Firebase", logo: firebaseSVG, description: "Firebase, Inc. is a set of backend cloud computing services and application development platforms provided by Google.", color: "#ffcb30"}
		], 
		description: "Journey is gaming app with which you can add games to your library, sign in, customise profile, set games as completed / favorite. Follow genres and developers.", 
		sourceCode: "https://github.com/alik532/gaming-platform", 
		site: "https://jazzy-gingersnap-ccaf3f.netlify.app", 
		img: journeyPNG,
		color: "#F44C28",
	},
	{
		title: "Spotify clone app", 
		techs: [
			{id: "1", name: 'React', logo: ReactSVG, description: "React is a free and open-source front-end JavaScript library for building user interfaces based on components.", color: "#61DAFB"},
			{id: "2", name: 'Redux', logo: ReduxSVG, description: "Redux is an open-source JavaScript library for managing and centralizing application state.", color: "#764ABC"},
			{id: "3", name: 'Rapid API', logo: RapidapiSVG, description: "The API Platform is a multi-cloud, customized hub to find, connect to, and share APIs.", color: "#0055DA"},
			{id: "4", name: 'Typescript', logo: TypescriptSVG, description: "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript.", color: "#3178C6"}
		], 
		description: "Spotify Clone site with features like listening songs, liking songs and playlists, adding songs to queue, searching new tracks", 
		sourceCode: "https://github.com/alik532/SpotifyClone2.0", 
		site: "https://main--chimerical-pithivier-570170.netlify.app/", 
		img: spotifyPNG,
		color: "#00FF0A",
	},
	{
		title: "Weather App",
		techs: [
			{id: "1", name: 'React', logo: ReactSVG, description: "React is a free and open-source front-end JavaScript library for building user interfaces based on components.", color: "#61DAFB"},
			{id: "2", name: 'Redux', logo: ReduxSVG, description: "Redux is an open-source JavaScript library for managing and centralizing application state.", color: "#764ABC"},
			{id: "3", name: 'Rapid API', logo: RapidapiSVG, description: "The API Platform is a multi-cloud, customized hub to find, connect to, and share APIs.", color: "#0055DA"},
			{id: "4", name: 'Typescript', logo: TypescriptSVG, description: "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript.", color: "#3178C6"}
		],
		description: "Real Time Weather application with 20+ countries. 3-Day forecast and vast amount of weather data",
		sourceCode: "https://github.com/alik532/WeatherApp",
		site: "https://verdant-choux-412b48.netlify.app/",
		color: "#6E3AFF",
		img: WeatherPNG,
	}
]

export const contactList:Array<IContact> = [
	{id: "1", name: "Head Hunter", logo: Headhunter, color: "#D10007", link: "https://hh.kz/resume/abc69d32ff0901d6150039ed1f7a6c32307035"},
	{id: "2", name: "Leet Code", logo: LeetcodeSVG , color:"#B48829", link: "https://leetcode.com/Alik532/"},
	{id: "3", name: "Code Wars", logo: CodewarsSVG, color: "#CF4B32", link: "https://www.codewars.com/users/alik532"},
	{id: "4", name: "Github", logo: GithubSVG, color: "#31363C", link: "https://github.com/alik532"},
	{id: "5", name: "LinkedIn", logo: Linkedin, color: "#0A66C2", link: "https://www.linkedin.com/in/alibek-nurtileu-321065249/"}
]