import React, {Component} from 'react';
import {Controller, Scene} from 'react-scrollmagic';
import WorkModal from './WorkModal';
import WorkBubble from './WorkBubble';

import '../../styles/work-list.css';

class WorkList extends Component {
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
 console.log(this.props);
    return (
      <div className='bg-color'>

      <Controller
        globalSceneOptions={{
          triggerHook:'onLeave',
          duration:'300'
        }}>
      <Scene pin>
        <div className='flex-container'>
          <WorkBubble
            example= {this.props.work[0]}
            openModal={this.openModal.bind(this)}/>
            <WorkModal
             example = {this.state.selectedExample}
             open = {this.state.modalOpen}
             close = {this.closeModal}/>
          <div className='text-rightside'>
          <h4>Heureka / Content Union</h4>
          <p>My responsibility was to create graphics for the installation.
            The aim was to create a city, that the users could manipulate freely.
            Technologies used were The Quuppa Intelligent Locating System™ and Unity.
          </p>

          </div>
        </div>
      </Scene>
      <Scene pin>
        <div className='flex-container'>
          <div className='text-leftside'>
          <h4>Graphic design for Taikateatteri13</h4>
          <p>During the years I have been doing different projects as a graphic designer.
          Here to showcase are few works that I have been doing for a magician and his
          TT13 project. </p>
          </div>
          <WorkBubble
            example= {this.props.work[1]}
            openModal={this.openModal.bind(this)}/>
            <WorkModal
             example = {this.state.selectedExample}
             open = {this.state.modalOpen}
             close = {this.closeModal}/>
        </div>
      </Scene>
      <Scene pin>
        <div className='flex-container'>
        <WorkBubble
          example= {this.props.work[2]}
          openModal={this.openModal.bind(this)}/>
          <WorkModal
           example = {this.state.selectedExample}
           open = {this.state.modalOpen}
           close = {this.closeModal}/>
          <div className='text-rightside'>
          <h4>Metropolia/ From games to start-ups -course</h4>
          <p>Game project concept design for a course in Metropolia.
          It was originally meant to be something totally different, hence the name:
          Plan B.</p>
          </div>
        </div>
      </Scene>
      <Scene pin>
        <div className='flex-container'>
          <div className='text-leftside'>
          <h4>Random selection</h4>
          <p>Some of my adventures in the digital art world.</p>
          </div>
          <WorkBubble
            example= {this.props.work[3]}
            openModal={this.openModal.bind(this)}/>
            <WorkModal
             example = {this.state.selectedExample}
             open = {this.state.modalOpen}
             close = {this.closeModal}/>
        </div>
      </Scene>
      </Controller>
      </div>
    )
  }
}

export default WorkList;
