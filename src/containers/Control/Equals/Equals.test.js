import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Equals } from './Equals';
import Control from '../../../components/Control/Control';

//connect enzyme
configure({adapter: new Adapter()});


describe('Equals button', () => {
    let wrapper;

    beforeEach(() => {
         wrapper = shallow(<Equals calculationAllowed />);
    });

    it('should not have equals button disabled if calculation is allowed', () => {
        expect(wrapper.find(Control).prop('disabled')).toBeFalsy();
    });

    it('should have equals button disabled if calculation is not allowed', () => {
        wrapper.setProps({calculationAllowed: false });
        expect(wrapper.find(Control).prop('disabled')).toBeTruthy();
    });
});