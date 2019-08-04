import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

it('expect to render Card component', () => {
    // expect(shallow(<Card />)).toMatchSnapshot();
    const component = shallow(<Card />);
    expect(component.debug()).toMatchSnapshot();
})