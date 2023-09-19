import './styles.css'
import gitLogo from '../../assets/logos/github-mark-white.png'
import LinkLogo from '../../assets/logos/LI-In-Bug.png'


export default function () {
    return (
    <ul>
        <li>
            <a href='https://github.com/Willlasbury' target='_blank'> 
                <img src={gitLogo} alt="Github Logo" />
            </a>
        </li>
        <li>
            <a href='https://www.linkedin.com/in/william-asbury-2613a824b/' target='_blank'> 
                <img src={LinkLogo} alt='LinkedIn Logo'/>
            </a>
        </li>
    </ul>

    )
}