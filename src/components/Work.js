import React, {Component} from 'react';
import {Controller, Scene} from 'react-scrollmagic';
import WorkModal from './WorkModal';
import WorkBubble from './WorkBubble';


class Work extends Component {
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
         {this.props.work.map( (example, index) =>(
             <WorkBubble
             example={example}
             key={index}
             openModal={ this.openModal.bind(this)} />

           ) )}
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


export default Work;
