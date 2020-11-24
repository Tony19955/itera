import React, { useState } from 'react';

import EmployeeDetail from '../EmployeeDetail/EmployeeDetail';

const EmployeeList = ({ isSelected, departments, employees, isLoaded }) => {

  const [isShown, setIsShown] = useState(false);
  const [employeeId, setEmployeeId] = useState(0);

  const showEmployeeDetail = (id) => {
    setIsShown(!isShown);
    setEmployeeId(parseInt(id));
  }

  return (    
    <div className="Employee-List">
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>     
        <tbody>
          {!isLoaded 
          ?
            <tr>
              <td>Loading...</td>
            </tr> 
          :
            (isSelected !== 0 
            ?
              employees.filter(item => item.departmentId === isSelected)
            : employees).map(({ id, name, departmentId }) => (
              <tr key={id}>
                <td>{id}</td>
                <td className="Pointer" id="Pointer-td" onClick={() => showEmployeeDetail(id)}>{name}</td>
                {departments.filter(item => item.id === departmentId).map(({ id, departmentName }) => (
                <td key={id}>{departmentName}</td>    
                ))}                        
              </tr>
            ))
          }
        </tbody>
      </table>      
      <EmployeeDetail isShown={isShown} employeeId={employeeId} employees={employees} setIsShown={setIsShown} />      
    </div>    
  );
};

export default EmployeeList;