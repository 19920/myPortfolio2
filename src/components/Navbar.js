import React ,{Component} from 'react';
import{NavLink} from "react-router-dom";
class Navbar extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar navbar-default navbar-fixed-top" id="mainNav" data-spy="scroll" data-target="#navbarResponsive" >
        <div className="container">
        <NavLink to="/" className ="nav-brand ">Jean Baptiste Kadahizi</NavLink>
      
        <div className=" navbar-collapse " id="navbarResponsive">
          <ul className="navbar-nav ml-auto nav page-nav list-inline">

      		       <li className="nav-link "><NavLink to ="/">Home</NavLink></li>
      		       <li className="nav-link"><NavLink exact to ="/About">About</NavLink></li>
                 <li className="nav-link"><NavLink to ="/Education">Education</NavLink></li>
                 <li className="nav-link"><NavLink to ="/App">Skills</NavLink></li>
                 <li className="nav-link"><NavLink to ="/Experience">Experience</NavLink></li>
                 <li className="nav-link"><NavLink to ="/Projects">Projects</NavLink></li>
      		       <li className="nav-link"><NavLink to ="/Contact">Contact</NavLink></li>




          </ul>
        </div>
      </div>
  </nav>
    );
  }

}
export default Navbar;