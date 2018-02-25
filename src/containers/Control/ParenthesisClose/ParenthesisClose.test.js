import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ParenthesisClose } from './ParenthesisClose';
import Control from '../../../components/Control/Control';

//connect enzyme
configure({adapter: new Adapter()});


describe('ParenthesisClose button', () => {
    let wrapper;

    beforeEach(() => {
         wrapper = shallow(<ParenthesisClose canCloseParenthesis={false}/>);
    });

    it('should have class disabled if the Parenthesis Close is not allowed', () => {
        expect(wrapper.find(Control).prop('disabled')).toBeTruthy();

    });

    it('should not have class disabled if the Parenthesis closes is allowed', () => {
        wrapper.setProps({canCloseParenthesis: true});
        expect(wrapper.find(Control).prop('disabled')).toBeFalsy();

    });
});