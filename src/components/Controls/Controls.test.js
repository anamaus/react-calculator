import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Digit from "../../containers/Control/Digit/Digit";
import Clear from '../../containers/Control/Clear/Clear';
import Decimal from '../../containers/Control/Decimal/Decimal';
import Equals from '../../containers/Control/Equals/Equals';
import Operator from '../../containers/Control/Operator/Operator';
import ParenthesisClose from '../../containers/Control/ParenthesisClose/ParenthesisClose';
import ParenthesisOpen from '../../containers/Control/ParenthesisOpen/ParenthesisOpen';
import Reset from '../../containers/Control/Reset/Reset';

import Controls from './Controls';

//connect enzyme
configure({adapter: new Adapter()});

/*
 shallow is for rendering react components, without its children,
 it doesnt render the entire subtree, ony this component
*/

describe('<Controls />', () => {
    let wrapper;

    //takes a function as parameter that will be executed before each test
    beforeEach(() => {
        wrapper = shallow(<Controls/>);
    });

    it('should render 1 <ParenthesisOpen /> button', () => {
        expect(wrapper.find(ParenthesisOpen)).toHaveLength(1);
    });

    it('should render 1 <ParenthesisClose /> button', () => {
        expect(wrapper.find(ParenthesisClose)).toHaveLength(1);
    });

    it('should render 1 <Decimal /> button', () => {
        expect(wrapper.find(Decimal)).toHaveLength(1);
    });

    it('should render 1 <Clear /> button', () => {
        expect(wrapper.find(Clear)).toHaveLength(1);
    });

    it('should render 1 <Reset /> button', () => {
        expect(wrapper.find(Reset)).toHaveLength(1);
    });

    it('should render 1 <Equals /> button', () => {
        expect(wrapper.find(Equals)).toHaveLength(1);
    });

    it('should render 4 <Operator /> buttons', () => {
        expect(wrapper.find(Operator)).toHaveLength(4);
    });

    it('should render 10 <Digit /> buttons', () => {
        expect(wrapper.find(Digit)).toHaveLength(10);
    })
});