import React from 'react';
import useResources from './useResources';
import Users from './Users';
const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
  return (
    <ul>
      {resources.map((record) => (
        <li key={record.id}>
          <p>{record.title}</p>
          <p>
            <Users userId={record.userId}></Users>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ResourceList;
