import React, {Component} from 'react';

class WorkModal extends Component {

  render () {
    const { example, close, open } = this.props;
    let modalClass =open ? 'modal--open':'modal--closed';

    return (
      <div className={"background--skyBlue " + modalClass}>
        <span className="color--cloud modal__closeButton"
          onClick={() => close()}>
          <i className="fa fa-window-close-o"></i>
        </span>

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
        </div>
      </div>

    )
  };
};

export default WorkModal;
