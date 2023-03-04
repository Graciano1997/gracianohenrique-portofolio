import './css/nav.css';

function Nav(props){
    return (
    
        <nav className='nav'   >
            <div id={props.className}>
            <a href="#skill"> My SKills</a>
            <a href="#about">  About Me </a>
             <a href="#project"> Projects </a>
             <a href="#contact"> Contact-Me </a>            
             <a href="#time">Time</a>    
    
            </div>
        </nav>
    );
};

export default Nav;