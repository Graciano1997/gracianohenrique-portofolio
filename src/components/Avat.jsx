
import GRACIANO from '../components/GRA.jpg';
import './css/avatar.css'
export default function Avat(props){
    return(
        <div className={props.class}>
<img src={GRACIANO} alt="Graciano Henrique" />
        </div>
    )
}