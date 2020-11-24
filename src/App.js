import React, { useState, useEffect } from 'react';

import EmployeeList from "./components/EmployeeList/EmployeeList";
import DepartmentFilter from "./components/DepartmentFilter/DepartmentFilter";

import axios from 'axios';

import './App.css';

const App = () => {

  const [isSelected, setSelected] = useState(0);
  const [employees, setEmployees] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/departments`)
    .then(response => {
      setIsLoaded(true);
      setDepartments(response.data);
    })
    .catch(error => {
      setIsLoaded(false);
      setDepartments(error);
    })
  }, []);

  useEffect(() => {    
    axios.get(`http://localhost:3001/employees`)
    .then(response => {
      setIsLoaded(true);
      setEmployees(response.data);
    })
    .catch(error => {
      setIsLoaded(false);
      setEmployees(error);
    })
  }, []);

  const handleChange = (e) => {
    setSelected(parseInt(e.target.value));    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee list</h1>
      </header>
      <div className="Content">
        <DepartmentFilter isSelected={isSelected} setSelected={setSelected} departments={departments} isLoaded={isLoaded} handleChange={handleChange} />
        <EmployeeList isSelected={isSelected} departments={departments} employees={employees} isLoaded={isLoaded} />
      </div>
    </div>
  );
}

export default App;
