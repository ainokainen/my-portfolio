import React from 'react'
import ReactDOM from 'react-dom'

import Nav from '../src/components/Nav'
import MainImage from '../src/components/MainImage'
import Work from '../src/components/Work'
import WorkList from '../src/components/WorkList'
import CoverLetter from '../src/components/CoverLetter'
import WorkParallax from '../src/components/WorkParallax'

import '../styles/main.css'
const myWork = [
  {
    'title': "Case Heureka",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "example sprite of the balloonwalker",
      'source': "images/balloonwalk.png",
      'comment':"Animated walker to give some life to the scene."
    }
  },
  {
    'title': "Case Akseli Gallen-Kallela",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "back of the artwork card",
      'source': "images/teos.jpg",
      'comment':"Back of one playing card in AKG series"
    }
  },
  {
    'title': "Gif testing for friends",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "test gif",
      'source': "images/discotesting3.gif",
      'comment':"Test gif for a few friends"
    }
  }
]

const App = () => (
  <section>
    <Nav />
    <MainImage/>
    <WorkList/>
    <Work work={myWork}/>
    <CoverLetter/>
    <WorkParallax work={myWork}/>
  </section>
)
export default App;
