import './index.scss'
import { Link , NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-c.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faYoutube, faGithub,  faItchIo } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">   
        <Link className="logo" to="/">
            <img src={LogoS} alt="logo" />
       

        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>

            </NavLink>

            <NavLink exact="true" activeclassname="active"  className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>

            </NavLink>

            <NavLink exact="true" activeclassname="active" className= "portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"/>

            </NavLink>

            <NavLink exact="true" activeclassname="active" className= "contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>

            </NavLink>

           
        </nav>

        <ul>

            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yichen-zhao-162b13340/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/Jillberg?tab=repositories">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@YichenZhao-y4w">
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://itch.io/dashboard">
                    <FontAwesomeIcon icon={faItchIo} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
)


export default Sidebar