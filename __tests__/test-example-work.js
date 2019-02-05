import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExampleWork, {ExampleWorkBubble} from '../js/example-work';


configure({ adapter : new Adapter()});

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
  }
];
describe("ExampleWork component", () => {
  let component = shallow(<ExampleWork work = {myWork}/>);

  it("Should be a 'section'element", () => {
    expect(component.type()).toEqual('section');
  });
  it("Should contain as many children as there are work examples", () => {
    expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
  });
});
describe("ExampleWorkBubble component", () => {
  let component = shallow(<ExampleWorkBubble example={myWork[1]} />);

  let images = component.find("img");

  it("Should contain a single 'img' element", () => {
    expect(images.length).toEqual(1);
  });
  it("Should have the image src set correctly", () => {
    expect(images.prop('src')).toEqual(myWork[1].image.src);
  });
});
