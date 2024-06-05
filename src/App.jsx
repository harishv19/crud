import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleEdit = (user) => {
    setCurrentUser(user);
  };

  const handleFormSubmit = () => {
    setCurrentUser(null);
    setRefresh(!refresh); // Toggle refresh to trigger useEffect in UserList
  };

  return (
    <div>
      <h1>User Management App</h1>
      <UserForm currentUser={currentUser} onFormSubmit={handleFormSubmit} />
      <UserList onEdit={handleEdit} refresh={refresh} />
    </div>
  );
};

export default App;
