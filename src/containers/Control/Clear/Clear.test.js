import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Clear from './Clear';

//connect enzyme
configure({adapter: new Adapter()});


describe('Clear button', () => {
    it('should have class disabled if there is no output', () => {
        const wrapper = shallow(<Clear />);
        expect(wrapper.hasClass('calculator-button--disabled')).toBeTruthy();


    });
});