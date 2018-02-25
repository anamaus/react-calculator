import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Clear } from './Clear';
import Control from '../../../components/Control/Control';

//connect enzyme
configure({adapter: new Adapter()});


describe('Clear button', () => {
    let wrapper;

    beforeEach(() => {
         wrapper = shallow(<Clear output={[]}/>);
    });

    it('should have class disabled if there is no output', () => {
        expect(wrapper.find(Control).prop('disabled')).toBeTruthy();

    });

    it('should not have class disabled if there is some output', () => {
        wrapper.setProps({output: [{value: '1'}]});
        expect(wrapper.find(Control).prop('disabled')).toBeFalsy();

    });
});