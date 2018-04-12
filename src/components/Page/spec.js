import React from 'react';
import { Page, mapStateToProps } from './index';
import { shallow } from 'enzyme';

describe('components/page', () => {
  const component = () => <h1>Hello, world!</h1>;

  it('renders passed component if page equals currentPage', () => {
    const wrapper = shallow(<Page page='page:a' currentPage='page:a' component={component}/>);
    expect(wrapper.find(component)).toHaveLength(1);
  });

  it('does not render if page does not equals currentPage', () => {
    const wrapper = shallow(<Page page='page:a' currentPage='page:b' component={component}/>);
    expect(wrapper.find(component)).toHaveLength(0);
  });

  describe('mapStateToProps', () => {
    it('passes state.page as currentPage', () => {
      const state = { page: 'hello!' };
      expect(mapStateToProps(state)).toEqual({ currentPage: 'hello!' });
    });
  });
});
