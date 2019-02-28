import React, {Component} from 'react';
import '../../styles/modal-gallery.css';

class WorkModal extends Component {

  renderImage(gallerysrc) {
    return <div className='tile'>
      <img
        className="img"
        src={gallerysrc}/>
    </div>
  }

  render () {
    const { example, close, open } = this.props;
    let modalClass = open ? 'modal--open':'modal--closed';


    console.log(this.props.example.gallery.gallerysrc + 'modaalista');

    return (
      <div>
      <div className={"background--skyBlue " + modalClass}>
        <div className="color--cloud modal__closeButton"
          onClick={() => close()}>
          <i className="fa fa-window-close-o"></i>
        </div>

        <img alt={example.image.desc}
             className="modal__image"
             src={example.image.src}/>
        <div className="color--cloud modal__text">
          <h2 className="modal__title">
            {example.title}
          </h2>
          <a className="color--skyBlue modal__link"
             href={example.href}>
            Check it out
          </a>
          <p className="modal__description">
            {example.desc}
          </p>
          <p className="modal__description">
          {example.addtext}</p>
            <div className='tiles'>
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
