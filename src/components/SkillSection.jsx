import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3, faGit, faGithub, faHtml5, faJava, faJs, faLaravel, faNodeJs, faPhp, faReact } from "@fortawesome/free-brands-svg-icons";
import './css/skill.css';
import { faDatabase } from "@fortawesome/free-solid-svg-icons";



export default function SkillSection(){
    return (
        <div className="skill" id='skill'>
            
            <h1>ABOUT MY SKILLS</h1>
        
        <div id='skills'>

        <div>
        <ul>
        <li> <h3>Front-end</h3></li>
       <li>
        <li>   <FontAwesomeIcon icon={faBootstrap} size='3x' /></li>
       <li><FontAwesomeIcon icon={faReact} size='3x' /></li>
       <li><FontAwesomeIcon icon={faHtml5} size='3x' /></li>
       <li><FontAwesomeIcon icon={faCss3} size='3x' /></li>
       <li><FontAwesomeIcon icon={faJs} size='3x' /></li>
         </li>
</ul>    
            </div>    
<div>
<ul>
<li> <h3> Back-end</h3></li>
<li>
<ul>
    <li><FontAwesomeIcon icon={faLaravel} size='3x' /></li>
    <li><FontAwesomeIcon icon={faNodeJs} size='3x' /></li>
    <li><FontAwesomeIcon icon={faPhp} size='3x' /></li>
</ul>
</li>
</ul>
</div>   
<div>
<ul>
<li> <h3> General</h3></li>
<li>
<ul>
    <li><FontAwesomeIcon icon={faGit} size='3x' /></li>
    <li><FontAwesomeIcon icon={faDatabase} size='3x' /></li>
    <li><FontAwesomeIcon icon={faGithub} size='3x' /></li>
    <li><FontAwesomeIcon icon={faJava} size='3x' /></li>
</ul>
</li>
</ul>
</div>   

        </div>
        </div>
       );
}