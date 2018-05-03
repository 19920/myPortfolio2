import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter ,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Experience from './components/Experience';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';
import Projects from './components/Projects';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
	  <div className="container-fluid">
      <Navbar />
			 
       
	        <Route>
  	         <div className="content">
               <Route exact path='/' component={Header} />
    				   <Route path='/About' component={About} />
    				   <Route path='/Contact' component={Contact} />
    				   <Route path='/Education' component={Education} />
  		         <Route path='/App' component={App} />
  		         <Route path='/Experience' component={Experience} />
  		         <Route path='/Projects' component={Projects} />
  			   </div>
		    </Route>
        <div>
         <Navbar />
         </div>
      </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();