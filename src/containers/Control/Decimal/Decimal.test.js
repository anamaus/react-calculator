import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Decimal } from './Decimal';
import Control from '../../../components/Control/Control';

//connect enzyme
configure({adapter: new Adapter()});


describe('Decimal button', () => {
    let wrapper;

    beforeEach(() => {
         wrapper = shallow(<Decimal decimalAdded />);
    });

    it('should have decimal disabled', () => {
        expect(wrapper.find(Control).prop('disabled')).toBeTruthy();
    });

    it('should not have decimal disabled', () => {
        wrapper.setProps({decimalAdded: false });
        expect(wrapper.find(Control).prop('disabled')).toBeFalsy();
    });
});