import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-c.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';


const Home = () => {
    
    const [letterClass,setLetterClass] = useState('text-animate');

    const nameArray = ['i','C','h','e','n']
    const jobArray = ['g','a','m','e',' ','d','e','v','e','l','o','p','e','r']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => clearTimeout(timeoutId); // Cleanup function to prevent memory leaks
    }, []);

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br /> 
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22}/>
                    </h1>
                    <h2>
                        Game Developer/ Programmer/ Game Enthusiast
                    </h2>
                    <Link to="/contact"  className='flat-button'>CONTACT ME</Link>
                </div>
            <Logo />
            </div>
            <Loader type='pacman' />
    </>
  );
}

export default Home;