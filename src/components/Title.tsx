import {FC, useEffect, useState} from 'react'
import classes from '../styles/Title.module.css'

interface ITitle {
	title: string;
}

const Title:FC<ITitle> = ({title}) => {

	const [scrollDirection, setScrollDirection] = useState('');

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(scrollDirection)

  return (
	<div className={classes.title}>
		<h1 className={classes.main}>{title}</h1>
		<h1 className={classes.echo1} style={scrollDirection == "up" ? {transform: "translateY(-50px)", animation: `${classes.blurReverse} .5s`} : {transform: "translateY(50px)", animation: `${classes.blur} .5s`} }>{title}</h1>
		<h1 className={classes.echo2}style={scrollDirection == "up" ? {transform: "translateY(-100px)", animation: `${classes.blurReverse2x} .7s`} : {transform: "translateY(100px)", animation: `${classes.blur2x} .7s`} }>{title}</h1>
	</div>
  )
}

export default Title