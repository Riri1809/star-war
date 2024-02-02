import React from 'react';
import EmployeeListItem from './EmployeeListItem';

function EmployeeList() {
  return (
    <div className="employee-list">
      <EmployeeListItem name="James King" position="President and CEO" />
      <EmployeeListItem name="Julie Taylor" position="VP of Marketing" />
      <EmployeeListItem name="Eugene Lee" position="CFO" />
      <EmployeeListItem name="Jonh Willian" position="VP of Engineering" />
      <EmployeeListItem name="Ray Moore" position="VP of sales" />
      <EmployeeListItem name="Paul Jones" position="QA Manager" />      
    </div>
  );
}

export default EmployeeList;
