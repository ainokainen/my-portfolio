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
      'gallerysrc':[
        {
          'gallimg': "images/HeurekaInAction.jpg",
          'tooltip': "Installation in place"
        },
        {
          'gallimg': "images/balloonwalk.png",
          'tooltip': "Sprite for girl with a balloon"
        },
        {
          'gallimg': "images/dreamcityconcept.jpg",
          'tooltip': "Concept image for mood"
        },
        {
          'gallimg':"images/neppisplacement.png",
          'tooltip': "Car model"
        },
        {
          'gallimg':"images/balcony.png",
          'tooltip': "Texture for a living quarters"
        },
        {
          'gallimg':"images/bicycle.png",
          'tooltip': "Texture for a living quarters"
        },
        {
          'gallimg':"images/lemonadestands.png",
          'tooltip': "Changing roof elements"
        },
        {
          'gallimg':"images/movie.png",
          'tooltip': "Texture for a movie theatre"
        },
        {
          'gallimg':"images/candy.png",
          'tooltip': "Texture for a candy store"
        },
        {
          'gallimg':"images/circus.png",
          'tooltip': "Texture for a circus"
        },
        {
          'gallimg':"images/florist.png",
          'tooltip': "Texture for a florist"
        },
        {
          'gallimg':"images/nukkumattitext.png",
          'tooltip': "Texture for a living quarters"
        },
        {
          'gallimg':"images/towers.png",
          'tooltip': "Texture for a living quarters"
        },
        {
          'gallimg':"images/toyshop.png",
          'tooltip': "Texture for a toyshop"
        },
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
      'gallerysrc': [
        {
          'gallimg': "images/fiskars.jpg",
          'tooltip': "Painted sign in place"
        },
        {
          'gallimg': "images/tarransijoittelu2.jpg",
          'tooltip': "Poster for TT13"
        },
        {
          'gallimg': "images/propo2.jpg",
          'tooltip': "Proposal for a new sign"
        },
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
      'gallerysrc': [
        {
          'gallimg': "images/flying2.jpg",
          'tooltip': "Concept design for a flying enemy"
        },
        {
          'gallimg': "images/redfirstdraft.jpg",
          'tooltip': "Concept design fo environment"
        },
        {
          'gallimg': "images/firstbug.jpg",
          'tooltip': "Concept design for an enemy"
        },
        {
          'gallimg': "images/scorpbug3.jpg",
          'tooltip': "Concept design for an enemy"
        },
        {
          'gallimg': "images/redcanyonlaakso.jpg",
          'tooltip': "Mood exploring for the environment"
        },
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
      'gallerysrc': [
        {
          'gallimg': "images/angelframe1.png",
          'tooltip': "Experimenting with Alchemy"
        },
        {
          'gallimg': "images/esine.jpg",
          'tooltip': "Back of AKG-card deck"
        },
        {
          'gallimg': "images/paikka.jpg",
          'tooltip': "Back of AKG-card deck"
        },
        {
          'gallimg': "images/toimi.jpg",
          'tooltip': "Back of AKG-card deck"
        },
        {
          'gallimg': "images/teos.jpg",
          'tooltip': "Back of AKG-card deck"
        },
        {
          'gallimg': "images/hanging.jpg",
          'tooltip': "Photoshop study"
        },
        {
          'gallimg': "images/discotesting3.gif",
          'tooltip': "Gif testing for fun"
        },
      ]
    },
  },
]

const MyWork = () => (
  <section>
    <WorkList work={myWork}/>
  </section>
)
export default MyWork;
