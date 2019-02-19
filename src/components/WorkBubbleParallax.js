import React, {Component} from 'react';
import {Controller, Scene} from 'react-scrollmagic';


class WorkBubbleParallax extends Component {
  render() {
    const {example, openModal} = this.props;
    return(
      <Scene duration={300} pin={true}>
      <div className="section__exampleWrapper"
        onClick={ (evt) => this.props.openModal(evt, example) }>

        <div className="section__example">

          <img alt={example.image.desc}
               className="section__exampleImage"
               src={example.image.source}/>
               <dl className="color--cloud">
               <dt className="section__exampleTitle section__text--centered">
               {example.title}
               </dt>
            <dd></dd>
          </dl>

        </div>

      </div>
      </Scene>
    )
  }
};
export default WorkBubbleParallax;
