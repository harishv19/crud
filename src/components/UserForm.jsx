import React, { useState, useEffect } from 'react';
import { addUser, updateUser } from '../services/api';

const UserForm = ({ currentUser, onFormSubmit }) => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.id) {
      await updateUser(user.id, user);
    } else {
      await addUser(user);
    }
    onFormSubmit();
    setUser({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
