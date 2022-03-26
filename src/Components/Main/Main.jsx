import  React, {Suspense} from 'react';
import Footer from '../Footer/Footer';
import './Main.scss';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import vedio1 from '../Images/production ID_5031099.mp4';
 const Main = () => {
    return ( 
    <div className="parallex">
    <div className="section_1">
    <div className="video-container">
      <Header/>
<video className="video" preload="true" autoPlay loop muted>          
<source src={vedio1} type="video/mp4" />
            video not supported
   
         </video>
         <div className="overlayText">
         <h1>Bamboo</h1>
         <p>SYNDICATE</p>
         </div>
         </div>
         </div>

         <div className="section_2">
           <div className="article">
             <p>Lorem ipsum, dolor sit amet consectetur 
               adipisicing elit. Corrupti minus dolorum, 
               inventore rerum odio incidunt labore. Tempore, quibusdam, quia quo minima, repudiandae numquam nihil 
               sequi est reiciendis cum neque sed?</p>
           </div>
           <div className="aside"></div>
         </div>
       
    </div> );
}

export default Main;