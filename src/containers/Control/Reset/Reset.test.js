import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Reset } from './Reset';

//connect enzyme
configure({adapter: new Adapter()});


describe('Reset button', () => {
    let wrapper;

    beforeEach(() => {
         wrapper = shallow(<Reset output={[]} />);
    });

    it('should have reset button disabled if no output', () => {
        expect(wrapper.find('button').hasClass('calculator-button--disabled')).toBeTruthy();
    });

    it('should have Reset button enabled if there is some output', () => {
        wrapper.setProps({output: [{val : '1'}] });
        expect(wrapper.find('button').hasClass('calculator-button--disabled')).toBeFalsy();
    });
});