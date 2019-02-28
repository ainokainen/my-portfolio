import React, {Component} from 'react';
import '../../styles/main.css';
import Aino from '../../images/Aino.jpg';

class MainImage extends Component {

  render() {

    return (
      <section className="background--skyBlue section parallax--background--profilePic">
        <h2 className="color--cloud margin--none section__text--left">
          Portfolio
        </h2>
        <p className="color--cloud margin--none section__text--left--p">
          <h3>Serverless portfolio made with:</h3>

          HTML, CSS, React.js, Python, npm, Jest, Webpack,
          Babel and GitHub
          <br/>
          <h3>AWS:</h3>
          Route53, CloudFront, S3, CodeBuild, CodePipeline and SNS.
          <br/>
          <h3>Site content:</h3>
          This portfolio displays some of my graphic design projects.
        </p>
      </section>
    )
  }
}

export default MainImage;
