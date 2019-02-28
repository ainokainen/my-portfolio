import React, {Component} from 'react';
import '../../styles/main.css'

class Nav extends Component {

  render() {

    return (
      <header className="header--flex">
        <h1 className="color--skyBlue section__heading--largest">
          Ainonlainen
        </h1>

        <ul className="section--social">
          <li className="socialWrapper">
            <a className="color--skyBlue social"
               title="LinkedIn Profile"
               target="_blank"
               href="https://www.linkedin.com/in/aino-rouvinen-930a7ba1/">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>

          <li className="socialWrapper color--skyBlue">
            <a className="social color--skyBlue"
               title="GitHub Profile"
               target="_blank"
               href="https://github.com/ainokainen">
              <i className="fa fa-github"></i>
            </a>
          </li>

          <li className="socialWrapper">
            <a className="social color--skyBlue"
               title="Resume"
               href="images/cv2017english.pdf">
              <i className="fa fa-file-text"></i>
            </a>
          </li>
        </ul>
      </header>
    )
  }
}

export default Nav;
