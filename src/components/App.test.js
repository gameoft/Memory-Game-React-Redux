import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import App from './App';

function setup() {
    return shallow(<App />);
}

describe('when App renders', () => {
    it('should display "Memory Game"', () => {
        const wrapper = setup();
        expect(wrapper.find('h1').text()).toEqual('Memory Game');
     });
     
  });
  
