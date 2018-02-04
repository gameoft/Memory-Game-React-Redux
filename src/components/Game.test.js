import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Game from './Game';

function setup(saving) {
    const props = {

        
    };
    return shallow(<Game {...props} />);

}

describe('when Game renders', () => {
    it('should display a button Reset', () => {
        const wrapper = setup(false);
       
        expect(wrapper.find('button').length).toBe(1);
        expect(wrapper.find('button').text()).toBe('Reset');
    });

   
  });
  
