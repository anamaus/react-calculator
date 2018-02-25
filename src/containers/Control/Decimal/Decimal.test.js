import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Decimal } from './Decimal';

//connect enzyme
configure({adapter: new Adapter()});


describe('Decimal button', () => {
    let wrapper;

    beforeEach(() => {
         wrapper = shallow(<Decimal />);
    });

    it('should have decimal disabled', () => {
        wrapper.setProps({decimalAdded: true });
        expect(wrapper.find('button').hasClass('calculator-button--disabled')).toBeTruthy();
    });

    it('should not have decimal disabled', () => {
        wrapper.setProps({decimalAdded: false });
        expect(wrapper.find('button').hasClass('calculator-button--disabled')).toBeFalsy();
    });
});