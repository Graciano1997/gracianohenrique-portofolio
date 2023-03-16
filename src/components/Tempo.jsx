import './css/tempo.css';

export default function Tempo(){    
    return  (
      <div className='corpo' id='time'>
    <h3> Time: {new Date().toLocaleTimeString()}</h3>
      </div>
    );
    }


