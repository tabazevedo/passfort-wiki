import React from 'react';
import { DocumentList } from './index';
import { shallow } from 'enzyme';
import Link from 'redux-first-router-link';

describe('components/DocumentList', () => {
  it('renders a link to a document for each passed doc', () => {
    const documents = ['one', 'two'];

    const wrapper = shallow(<DocumentList documents={documents} />);
    const links = wrapper.find(Link);

    expect(links.length).toEqual(2);
  });
});
