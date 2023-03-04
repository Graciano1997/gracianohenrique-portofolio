import './css/tempo.css';
import { useState } from "react";

export default function Tempo(){
    const[thema,setThema]=useState('yara');
    
    return  (
      <div className='corpo' id='time'>
    <h3> Time: {new Date().toLocaleTimeString()}</h3>
      </div>
    );
    }


