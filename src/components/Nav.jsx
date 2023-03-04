import './css/nav.css';

   
const handleClick = (anchor) => () => {
    const id = `${anchor}`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        time:"12s",
      });
    }
  };
function Nav(props){



    return (
    
        <nav className='nav'   >
            <div id={props.className}>
            <a href="#skill" onClick={handleClick('skill')}> My SKills</a>
            <a href="#about" onClick={handleClick('about')}>  About Me </a>
             <a href="#project" onClick={handleClick('project')}> Projects </a>
             <a href="#contact" onClick={handleClick('contact')}> Contact-Me </a>            
             <a href="#time" onClick={handleClick('time')}>Time</a>    
    
            </div>
        </nav>
    );
};

export default Nav;