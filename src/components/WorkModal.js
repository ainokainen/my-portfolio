import React, {Component} from 'react';
import '../../styles/modal-gallery.css';

class WorkModal extends Component {

  renderImage(gallerysrc) {
    return <div className='modal__tile'>
      <div className='tooltip'>{gallerysrc.tooltip}</div>
      <a href={gallerysrc.gallimg} target='_blank'>
      <img
        className="modal__img"
        src={gallerysrc.gallimg}/>
        </a>
    </div>
  }

  render () {
    const { example, close, open } = this.props;
    let modalClass = open ? 'modal--open':'modal--closed';

    return (
      <div>
      <div className={"background--skyBlue " + modalClass}>
        <span className="color--cloud modal__closeButton"
          onClick={() => close()}>
          <i className="fa fa-window-close-o"></i>
        </span>

        <img alt={example.image.desc}
             className="modal__bg--image"
             src={example.image.src}/>
        <div className="color--cloud modal__text">
          <h2 className="modal__title">
            {example.title}
          </h2>
          <p className="modal__description">
            {example.desc}
          </p>
          <p className="modal__description">
          {example.addtext}</p>
            <div className='modal__tiles'>
              {this.props.example.gallery.gallerysrc.map(gallerysrc =>
                this.renderImage(gallerysrc))}
            </div>
          </div>
        </div>
      </div>
    )
  };
};

export default WorkModal;
