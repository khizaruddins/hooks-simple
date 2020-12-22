import React from 'react';
import useResources from './useResources';

export default function Users({ userId }) {
  const { name } = useResources(`${'users/' + userId}`);

  return <div>Name: {name}</div>;
}
