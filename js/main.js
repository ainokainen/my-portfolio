import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Case Heureka",
    'image': {
      'desc': "example sprite of the balloonwalker",
      'src': "images/balloonwalk.png",
      'comment':"Animated walker to give some life to the scene."
    }
  },
  {
    'title': "Case Akseli Gallen-Kallela",
    'image': {
      'desc': "back of the artwork card",
      'src': "images/teos.jpg",
      'comment':"Back of one playing card in AKG series"
    }
  },
  {
    'title': "Gif testing for friends",
    'image': {
      'desc': "test gif",
      'src': "images/discotesting3.gif",
      'comment':"Test gif for a few friends"
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
