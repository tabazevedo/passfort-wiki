import React from 'react';
import { RevisionList } from './index';
import { shallow } from 'enzyme';
import Link from 'redux-first-router-link';

describe('components/RevisionList', () => {
  it('renders a link to a revision for each item', () => {
    const revisions = [123, 456, 789];

    const wrapper = shallow(<RevisionList revisions={revisions} />);
    const links = wrapper.find(Link);

    expect(links.length).toEqual(3);
  });
});
