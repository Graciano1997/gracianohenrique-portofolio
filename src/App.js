import logo from './logo.svg';
import {  faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import './App.css';
import Nav from './components/Nav';
import Tempo from './components/Tempo';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function App() {  
  const [thema,setThema]=useState('white');
  const [men,setMen]=useState('none');
  const [meni,setMeni]=useState('≡');
  const [icon,setIcon]=useState({state:'day',icon:faMoon});


  return (
    <div className={thema }>

    
<div className='logo' style={{background:thema}} >


<Header/>
<div >
  <a  style={{fontSize:'50pt', margin:'20px'}} onClick={
     function(){

    if(men=='none'){
      setMen('flex'); 
      setMeni('x'); 

    document.getElementById(thema).style.display='flex';
    }else{
      setMen('none')
      setMeni('≡')
      document.getElementById(thema).style.display='none';
    }
  }

  } >{meni}</a >
  
  <span onClick={function(){
  if(thema==='white'){
    setThema('black')
      setIcon({state:'noite',icon:faSun})
  }else{

    (setThema('white'));
    setIcon({state:'dia',icon:faMoon})
  
  }

}} className="iconthema" id={icon.state}><FontAwesomeIcon icon={icon.icon} size='4x' /> </span> 
  </div>
  
</div>
    <Nav className={thema} />
  
<Main thema={thema}/>
<Footer cor={thema} />
</div>
   
    
  );
}

export default App;
