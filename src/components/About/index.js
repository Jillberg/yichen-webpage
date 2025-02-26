import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import {useEffect,useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCss3, faHtml5, faJsSquare, faReact, faUnity,faGitAlt} from '@fortawesome/free-brands-svg-icons';
import { SiUnrealengine, SiBlender, SiGodotengine, } from 'react-icons/si';
import Loader from 'react-loaders';

const About =() =>{

    const [letterClass,setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => clearTimeout(timeoutId); // Cleanup function to prevent memory leaks
    }, []);


    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                            strArray={['A','b','o','u','t',' ','M','e']}
                            idx={15}

                        />
                    </h1>
                    <p>
                        I am a graduate student studying Computer Science at Linköping University, Sweden. I have a passion for video games and am always looking for new challenges. I have experience in game development and web development, and I am eager to expand my skills further. I am always seeking new opportunities to learn and grow as a developer.
                    </p>
                    <p>
                        Aside from games, I also enjoy thought-provoking works in other media, including movies, books, and music. I don't limit myself to being just a programmer; as video games are an all-encompassing form of art, I continuously expand my repertoire to include cross-disciplinary skills essential for game development.
                    </p>
                    <p>
                        This website serves as a showcase of my work and a platform to share my thoughts and ideas. Feel free to contact me if you have any questions or if you're interested in collaborating on a project.
                  
                    </p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <SiBlender size={180} color="#E87D0D" />
                        </div>
                        <div className='face2'>
                            <SiUnrealengine size={180} color="#0E1128" />  
                        </div>
                        <div className='face3'>
                            <SiGodotengine size={180} color='#28A4D9'/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faGitAlt} color='#EFD81D'/>
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faUnity} color='#EC4D28'/>
                        </div>
                    </div>

                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About;