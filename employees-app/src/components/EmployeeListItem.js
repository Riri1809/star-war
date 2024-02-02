import React from 'react';

function EmployeeListItem({ name, position }) {
  return (
    <div className="employee-list-item">
      <h5>{name}</h5>
      <p>{position}</p>
    </div>
  );
}

export default EmployeeListItem;
