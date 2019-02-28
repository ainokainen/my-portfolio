import React from 'react'
import ReactDOM from 'react-dom'
import WorkList from './WorkList';

const myWork = [
  {
    'title': "Installation in Heureka",
    'href': "https://example.com",
    'desc': "My responsibility was to create graphics for the installation. The aim was to create a city, that the users could manipulate freely. Technologies used were The Quuppa Intelligent Locating System™ and Unity.",
    'image': {
      'desc': "Concept design for the dream city",
      'src': "images/dreamcityconcept.jpg",
      'comment':"Concept design for the dream city."
    },
    'addtext':"Stuff about the project",
    'gallery': {
      'gallerysrc':[ "images/balloonwalk.png",
                      "images/dreamcityconcept.jpg",
                      "images/neppisplacement.png",
                      "images/balcony.png",
                      "images/bicycle.png",
                      "images/candy.png",
                      "images/circus.png",
                      "images/florist.png"
                  ]
    },
  },
  {
    'title': "Graphic design",
    'href': "https://example.com",
    'desc': "During the years I have been doing different projects as a graphic designer. Here to showcase are few works that I have been doing for a magician and his TT13 project.",
    'image': {
      'desc': "Painted sign concept",
      'src': "images/propo2.jpg",
      'comment':"Painted sign in place"
    },
    'addtext':"Stuff about the project",
    'gallery': {
      'gallerysrc': ["images/fiskars.jpg",
                      "images/tarransijoittelu2.jpg",
                      "images/propo2.jpg"
                    ]
    },
  },
  {
    'title': "Plan B from Outer Space",
    'href': "https://example.com",
    'desc': "Game project concept design for a course in Metropolia. It was originally meant to be something totally different, hence the name: Plan B.",
    'image': {
      'desc': "Environment concept",
      'src': "images/redfirstdraft.jpg",
      'comment':"Test gif for a few friends"
    },
    'addtext':"Stuff about the project",
    'gallery': {
      'gallerysrc': ["images/flying2.jpg",
                      "images/redfirstdraft.jpg",
                      "images/firstbug.jpg",
                      "images/redcanyonlaakso.jpg"
                    ]
    },
  },
  {
    'title': "Personal projects and sketches",
    'href': "https://example.com",
    'desc': "Some of my adventures in the digital art world.",
    'image': {
      'desc': "Collection of personal work",
      'src': "images/discotesting3.gif",
      'comment':"Test gif for a few friends"
    },
    'addtext':"Stuff about the project",
    'gallery': {
      'gallerysrc': ["images/esine.jpg",
                      "images/paikka.jpg",
                      "images/toimi.jpg",
                      "images/teos.jpg",
                      "images/discotesting3.gif"
                    ]
    },
  }
]

const MyWork = () => (
  <WorkList work={myWork}/>
)
export default MyWork;
