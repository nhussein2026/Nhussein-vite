import { PiGithubLogoFill } from 'react-icons/pi';
import { GrLinkedin } from 'react-icons/gr';
import nasser from '../../data/Nasser'
import style from "./Links.module.css"
function Links  ()  {
  
  return (
    <div>
        <a className={style.icon} rel='noreferrer noopener' target='_blank' href={nasser.links.github}><PiGithubLogoFill /></a>
        <a className={style.inIcon} rel='noreferrer noopener' target='_blank' href={nasser.links.linkedin}><GrLinkedin /></a>
    </div>
  )
}
export default Links