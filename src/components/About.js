import React,{Component} from 'react';
import Educationprofile from './Educationprofile';

class About extends Component {
  render() {
    return (
      <div id="about" className ="jumbotron container text-dark">
    	<h4 className="text-center bg-danger text-light mine"><strong>Who Is Me?</strong></h4>
        <div className ="container-fluid">
         <p>
            I'm a Full stack developer based in Sweden, developing web applications by using different languages and frameworks
             </p>
        </div>
        <div className ="container-fluid">
         <p>Motivated by a strong determination  to the contribution of
            the optimization of the technical opportunities and
            for the promotion of the technical-entrepriese,
            either ,small,middle or big especially in private sector,
            Having a vision to give services of good quality and competitive not only to the local level but also
             to the international level.</p>
        </div>
        <h4>Always Motivated by her:</h4>
        <Educationprofile />
        
        </div>

    );
  }
}

export default About;

