import React from 'react';
import { shallow } from 'enzyme';
import EmployeeDetail from './EmployeeDetail';

describe('EmployeeDetail component', () => {
  let wrapper;  

  beforeEach(() => {      

    const mockProps = {      
      isShown: false,
      employeeId: 1,
      employees: []   
    };

    wrapper = shallow(<EmployeeDetail {...mockProps} />);
  });

  it('EmployeeDetail data is correct ', () => {
    expect(wrapper).toMatchSnapshot();
  });
});