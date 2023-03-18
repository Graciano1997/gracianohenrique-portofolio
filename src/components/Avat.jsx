
import GracianoH from '../components/GracianoH.jpg';
import './css/avatar.css'
export default function Avat(props){
    return(
        <div className={props.class}>
<img src={GracianoH} alt="Graciano Henrique" />
        </div>
    )
}
