import Avat from './Avat';
import './css/about.css'

export  function About(){
    return (
        <div>
<h1> Graciano Henrique </h1>
<h3>Front-end and Back-End developer </h3>
<p>I am available to get new opportunities such as: <b>Training</b> and <b>Job</b> in the development area. </p>
</div>);
}

export default function AboutSection (){
    return (
<div className="about" id='about'>    
<Avat class="avatar" />
<About />

</div>
    );

}