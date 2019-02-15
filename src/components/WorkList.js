import React, {Component} from 'react';
import {Controller, Scene} from 'react-scrollmagic';
import neppisplacement from '../../images/neppisplacement.png';
import discotesting3 from '../../images/discotesting3.gif';
import esine from '../../images/esine.jpg';
import '../../styles/work-list.css';

class WorkList extends Component {

  render() {

    return (
      <div>
      <Controller globalSceneOptions= {{
        triggerHook: 'onLeave',
      }}>
      <Scene duration={300} pin={true}>
        <div className='flex-container'>
          <img className='leftside img' src={discotesting3} responsive/>
          <div className='text-rightside'>
          <h3>TÃ¤mÃ¤ on projekti 1</h3>
          <p>Ja tÃ¤ssÃ¤ on jotain kuvausta
            kyseisestÃ¤ projektista
            jonka tein ihan ite</p>
            </div>
        </div>
      </Scene>
      <Scene duration= {300} pin={true}>
        <div className='flex-container'>
          <div className='text-leftside'>
          <h3>TÃ¤mÃ¤ on projekti 2</h3>
          <p>Ja tÃ¤ssÃ¤ on jotain kuvausta
            kyseisestÃ¤ projektista
            jonka tein ihan ite</p>
          </div>
          <img className='rightside img' src={discotesting3} responsive/>
        </div>
      </Scene>
      <Scene duration={300} pin={true} >
        <div className='flex-container'>
          <img className='leftside img' src={discotesting3} responsive/>
          <div className='text-rightside'>
          <h3>TÃ¤mÃ¤ on projekti 3</h3>
          <p>Ja tÃ¤ssÃ¤ on jotain kuvausta
            kyseisestÃ¤ projektista
            jonka tein ihan ite</p>
          </div>
        </div>
      </Scene>
      </Controller>
      </div>
    )
  }
}

export default WorkList;
