import React from 'react';
import { shallow } from 'enzyme';
import DepartmentFilter from './DepartmentFilter';

describe('DepartmentFilter component', () => {
  let wrapper; 
  let mockHandleChange;

  beforeEach(() => {   
    mockHandleChange = jest.fn();

    const mockProps = {
      isLoaded: true,
      isSelected: 0,
      handleChange: mockHandleChange,
      departments: []
    };

    wrapper = shallow(<DepartmentFilter {...mockProps} />);
  });

  it('DepartmentFilter data is correct ', () => {
    expect(wrapper).toMatchSnapshot();
  });  
  
  it('should call handleChange if select has changed', () => {
    wrapper.find('select').simulate('change');
    expect(mockHandleChange).toHaveBeenCalled();
  }); 

});