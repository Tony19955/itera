import React from 'react';

const EmployeeDetail = ({ setIsShown, isShown, employeeId, employees }) => {  

  return (
    <div className={`Employee-Detail-Modal ${isShown ? "Modal-Shown" : ""}`} id="Employee-Detail-Modal">
      <span className="Close-Button Pointer" id="Close-Button" onClick={() => setIsShown(!isShown)}>x</span>
      {employeeId !== 0 &&
        (employees.filter(item => item.id === employeeId)).map(({ id, name, age, departmentId, startDate, endDate }) => (
        <div key={id}>
          <p><strong>Employee ID: </strong>{id}</p>
          <p><strong>Full name: </strong>{name}</p>
          <p><strong>Age: </strong>{age}</p>
          <p><strong>Department ID: </strong>{departmentId}</p>
          <p><strong>Start date: </strong>{startDate}</p>
          <p><strong>End date: </strong>{endDate}</p>
        </div>
      ))}
    </div>
  );
}

export default EmployeeDetail;