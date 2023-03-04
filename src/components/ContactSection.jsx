import Contact from './Contacts';
import './css/contact.css'


export function ArrowUp(props){
return(
    <div className='ArrowUp' id={props.cor} >
    <div>
            <a href='#'>↑</a>
    </div>
</div>
);

}
export default function ContactSection(props){

    return (
        <div className="contact" id='contact'>
            <h1>CONTACT - ME </h1>
                <Contact style={'contatos-'.concat(props.cor)} />            

        </div>

    )
}