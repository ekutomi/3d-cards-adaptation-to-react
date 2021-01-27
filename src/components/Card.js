import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import ball from '../assets/images/ball-some-avatar.png'
import batman from '../assets/images/batman-some-avatar.png'
import pikachu from '../assets/images/pikachu-some-avatar.png'
import harold from '../assets/images/harold-some-avatar.png'
import ponteflix from '../assets/images/ponteflix_logo.png'

const useStyles = makeStyles((theme) => ({
  body: {
//    minHeight: '100vh',
    height: '1000px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    perspective: '1000px',
    backgroundColor: 'lightblue',
  },
  container: {
//    width: '50rem',
    perspective: '1000px',
    height: '600px',
    width: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightpink',
    padding: '0',
    borderColor: 'black',
    borderWidth: '5px',
  },
  card: {
//    minHeight: '80vh',
//    width: '30rem',
    height: '500px',
    width: '350px',
    background: 'lightgreen',
    boxShadow: '0 20px 20px rgba(0,0,0,0.2), 0px 0px 50px rgba(0,0,0,0.2)',
    borderRadius: '30px',
    padding: '2rem',
    transformStyle: 'preserve-3d',
  },
  avatar: {
    minHeight: '35vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: '15rem',
    height: '15rem',
    backgroundImage: 'linear-gradient(to right, rgba(245,70,66,0.75), rgba(8,83,156,0.75))',
    position: 'absolute',
    borderRadius: '50%',
    zIndex: '1',
  },
  avatarImage: {
    maxWidth: '20rem',
    maxHeight: '20rem',
    zIndex: '2',
  },
  info: {
    fontSize: '1rem',
    fontWeight: 'lighter',
  },
  button: {
    fontSize: '2rem',
    border: 'none',
    borderRadius: '30px',
    fontWeight: 'bold',
    background: 'none',
    boxShadow: '0px5px 10px rgba(0,0,0,0.2)',
    cursos: 'pointer',
  },
}));

function Card() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [transition, setTransition] = useState("none");
  const [translateZ, setTranslateZ] = useState(0);
  const [imageTransition, setImageTransition] = useState("all 0.75 ease-out");

  const card = React.useRef(null);
  const container = React.useRef(null);

  function onMouseOut(e) {
    if (((e.clientY < container.current.offsetTop)
    || (e.clientY >= (container.current.offsetTop+container.current.clientHeight)))
    || ((e.clientX < container.current.offsetLeft)
    || (e.clientX >= (container.current.offsetTop+container.current.clientWidth)))) {
      setTransition("all 0.5s ease")
      setPosition({x:0,y:0})
      setTranslateZ("0")
    }
  }

  function onMouseEnter(e) {
    setTransition("none")
    setImageTransition("all 0.25s ease-out")
    setTranslateZ("150") // calculate pxs
    console.log('hi')
  }

  function onMouseMove(e) {
    e.stopPropagation()
    let xAxis = (((container.current.clientWidth / 2) - (e.clientX - container.current.offsetLeft))/20)
    let yAxis = -(((container.current.clientHeight / 2) - (e.clientY - container.current.offsetTop))/20)
    setPosition({x: xAxis, y: yAxis})
  }

  const cardStyle = {
    transform: `rotateX(${position.y}deg) rotateY(${position.x}deg)`,
    transition: transition,
  };

  const imageStyle = {
    transform: `translateZ(${translateZ}px)`,
    transition: imageTransition,
  };

  const classes = useStyles()

  return(
      <div className={classes.container} onMouseEnter={onMouseEnter} onMouseMove={onMouseMove} onMouseOut={onMouseOut} ref={container}>
        <div className={classes.card} style={cardStyle} ref={card}>
          <div className={classes.avatar}>
            <div className={classes.circle}>
            </div>
            <img
              className={classes.avatarImage}
              src={ponteflix}
              alt='avatar?2'
              style={imageStyle}
            />
          </div>
          <div className={classes.info}>
            <p>some info here</p>
          </div>
          <div className={classes.button}>
            <button className={classes.button2}>get! {position.x} and  {position.y}</button>
          </div>
        </div>
      </div>
  )
}

export default Card
