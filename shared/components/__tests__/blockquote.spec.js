import React from 'react';
import { shallow } from 'enzyme';
import Blockquote from '../Blockquote';

describe('Blockquote', () => {
  it('Renders the note blockquote', () => {
    const wrapper = shallow(<Blockquote />);
    expect(wrapper.find('.site-blockquote_note').length).toEqual(1);
  });

  it('Renders the a11y blockquote', () => {
    const wrapper = shallow(<Blockquote type="ally" />);
    expect(wrapper.find('.site-blockquote_ally').length).toEqual(1);
  });

  it('Renders the warning blockquote', () => {
    const wrapper = shallow(<Blockquote type="warning" />);
    expect(wrapper.find('.site-blockquote_warning').length).toEqual(1);
  });

  it('Renders a header in the blockquote', () => {
    const wrapper = shallow(<Blockquote header="Some header text goes here" />);
    expect(wrapper.find('.lead').length).toEqual(1);
  });
});
