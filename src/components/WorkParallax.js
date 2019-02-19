import React, {Component} from 'react';
import WorkModal from './Workmodal';
import WorkBubbleParallax from './WorkBubbleParallax';
import {Controller, Scene} from 'react-scrollmagic';
import neppisplacement from '../../images/neppisplacement.png';
import discotesting3 from '../../images/discotesting3.gif';
import esine from '../../images/esine.jpg';
import '../../styles/work-list.css';

class WorkParallax extends Component {
   constructor(props) {
     super(props);

       this.state = {
         modalOpen: false,
         selectedExample: this.props.work[0]
       }
       this.openModal = this.openModal.bind(this);
       this.closeModal = this.closeModal.bind(this);
     }
     openModal (evt, example) {
       this.setState({
         modalOpen: true,
         selectedExample: example
       });
       console.log('maanantai on paras päivä');
     }
     closeModal(evt) {
       this.setState({
         modalOpen: false
       });
     }
     render() {
       return(
         <span>


         <section className="section section--alignCentered section--description">
         <Controller globalSceneOptions= {{
             triggerHook: 'onLeave',
             }}>
         {this.props.work.map( (example, index) =>
           (

             <WorkBubbleParallax
             example={example}
             key={index}
             openModal={ this.openModal.bind(this)} /> ))

           }
           </Controller>
           {console.log('moi bubblesta')}

           </section>

           <WorkModal
            example = {this.state.selectedExample}
            open = {this.state.modalOpen}
            close = {this.closeModal}/>
          </span>
       );
     }
}


export default WorkParallax;
