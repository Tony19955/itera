import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  let wrapper;  

  beforeEach(() => {   

    wrapper = shallow(<App />);
  });

  it('App data is correct ', () => {
    expect(wrapper).toMatchSnapshot();
  });
});