import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    
     faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack,Link } from "@chakra-ui/react";


const socials = [
  {
    icon:  faEnvelope,
    url: "mailto: gracianomanuelhenrique@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Graciano1997",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/graciano-manuel-henrique-175527221/",
  },
  {
    icon: faMedium,
    url: "https://medium.com/@gracianomanuelhenrique",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/21163789/graciano-henrique",
  },
  {
    icon: faWhatsapp,
    url: "https://wa.me/244935636086",
  }
];

const Contact = (props) => {
 

  return (
                    <div className="contatos" id={props.style}>
            
            <a href={socials[0].url} target="_blank" rel="noreferrer" >
              
            <FontAwesomeIcon icon={socials[0].icon} size='6x' />
            
             </a>
           
            <a href={socials[1].url} target="_blank">
            <FontAwesomeIcon icon={socials[1].icon} size='6x'/>
             </a>
           
            <a href={socials[2].url} target="_blank">
            <FontAwesomeIcon icon={socials[2].icon} size='6x'/>
             </a>
             
            <a href={socials[3].url} target="_blank">
            <FontAwesomeIcon icon={socials[3].icon} size='6x'/>
             </a>
             
            <a href={socials[4].url} target="_blank">
            <FontAwesomeIcon icon={socials[4].icon} size='6x'  />
             </a>
             
            <a href={socials[5].url} target="_blank">
            <FontAwesomeIcon icon={socials[5].icon} size='6x'  />
             </a>

          </div>
      
    );
};


export default Contact;
