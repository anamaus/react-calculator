import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Operator } from './Operator';

//connect enzyme
configure({adapter: new Adapter()});


describe('Operator button', () => {
    let wrapper;

    beforeEach(() => {
         wrapper = shallow(<Operator operatorsAllowed={false}/>);
    });

    it('should have class disabled if the operators are not allowed', () => {
        expect(wrapper.find('button').hasClass('calculator-button--disabled')).toBeTruthy();

    });

    it('should not have class disabled if the operators are allowed', () => {
        wrapper.setProps({operatorsAllowed: true});
        expect(wrapper.find('button').hasClass('calculator-button--disabled')).toBeFalsy();

    });
});