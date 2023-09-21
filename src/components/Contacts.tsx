import {FC} from 'react'
import classes from '../styles/Contacts.module.css'
import { contactList } from '../data'

const Contacts:FC = () => {
  return (
	<div className={classes.item}>
		{contactList.map(contact => 
			<a href={contact.link} key={contact.id} className={classes.contact} style={{background: `linear-gradient(${contact.color},  ${contact.color}60, #121212)`}}>
				<img src={contact.logo} alt="" />
				<h2 className={classes.name}>{contact.name}</h2>
			</a>
		)}
	</div>
  )
}

export default Contacts