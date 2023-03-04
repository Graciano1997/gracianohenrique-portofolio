import AboutSection from './AboutSection'
import ContactSection, { ArrowUp } from './ContactSection'
import './css/main.css'
import ProjectSection from './ProjectSection'
import SkillSection from './SkillSection'


export default function Main(props){

    return (   
 <main className='main'>

<AboutSection />
<ProjectSection />

<SkillSection />

<ContactSection cor={props.thema} />            
<ArrowUp cor={props.thema} />            

        </main>
    )
}