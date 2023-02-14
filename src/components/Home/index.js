import { Link } from 'react-router-dom'
import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['D', 'E', 'L', 'T', 'A']
  const jobArray = [
    'G',
    'l',
    'o',
    'b',
    'a',
    'l',
    ' ',
    'S',
    'o',
    't',
    'w',
    'a',
    'r',
    'e',
  ]

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>Welcome</span>
           <br /> to  
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15} />
            <br />
          
          <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx={22} />  
        </h1>
        <h2>Web | Mobile | Desktop Solutions.</h2>
        <Link to="/contact" className="flat-button">
          CONTACT US
        </Link>
      </div>
    </div>
  )
}

export default Home
