import React from 'react';
import { shallow } from 'enzyme';
import EmployeeList from './EmployeeList';

describe('EmployeeList component', () => {
  let wrapper;  

  beforeEach(() => {   

    const mockProps = {      
      isSelected: 0,
      departments: [],
      employees: [],
      isLoaded: false,
    };

    wrapper = shallow(<EmployeeList {...mockProps} />);
  });

  it('EmployeeList data is correct ', () => {
    expect(wrapper).toMatchSnapshot();
  });
});