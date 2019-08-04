import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render CardList component', () => {
    // expect(shallow(<Card />)).toMatchSnapshot();
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'JohnJohn',
            email: 'john@gmail.com'
        }
    ]
    const component = shallow(<CardList robots={mockRobots} />);
    expect(component.debug()).toMatchSnapshot();
})