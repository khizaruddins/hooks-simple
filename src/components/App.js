import React, { useState } from 'react';
import ResourceList from '../components/ResourceList';
const App = () => {
  const [resource, setResource] = useState('posts');
  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
        <ResourceList resource={resource} />
      </div>
    </div>
  );
};
export default App;
