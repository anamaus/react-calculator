import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Equals } from './Equals';

//connect enzyme
configure({adapter: new Adapter()});


describe('Equals button', () => {
    let wrapper;

    beforeEach(() => {
         wrapper = shallow(<Equals />);
    });

    it('should not have equals button disabled if calculation is allowed', () => {
        wrapper.setProps({calculationAllowed: true });
        expect(wrapper.find('button').hasClass('calculator-button--disabled')).toBeFalsy();
    });

    it('should have equals button disabled if calculation is not allowed', () => {
        wrapper.setProps({calculationAllowed: false });
        expect(wrapper.find('button').hasClass('calculator-button--disabled')).toBeTruthy();
    });
});