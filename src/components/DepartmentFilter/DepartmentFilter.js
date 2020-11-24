import React from 'react';

const DepartmentFilter = ({ isSelected, departments, isLoaded, handleChange }) => {    

  return (
  <div className="Department-Filter">
    <select value={isSelected} onChange={handleChange} disabled={!isLoaded}>
      <option value={0}>All departments</option>
      {departments.map(({ id, departmentName }) => (
        <option key={id} value={id}>{departmentName}</option>
      ))}
    </select>
  </div>
  );
};

export default DepartmentFilter;