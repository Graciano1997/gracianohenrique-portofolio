import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Tempo from './components/Tempo';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { useState } from 'react';

function App() {  
  const [thema,setThema]=useState('white');
  const [men,setMen]=useState('none');
  const [meni,setMeni]=useState('≡');


  return (
    <div className={thema }>

    
<div className='logo' style={{background:thema}} >


<Header/>
<div >
  <h1 ><button onClick={function(){
  (thema==='white')?(setThema('black')):(setThema('white'));

}} style={{fontSize:'15px' }}>Theme {thema} </button> 
  </h1 >
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
  
  </div>
  
</div>
    <Nav className={thema} />
  
<Main thema={thema}/>
<Footer cor={thema} />
</div>
   
    
  );
}

export default App;
