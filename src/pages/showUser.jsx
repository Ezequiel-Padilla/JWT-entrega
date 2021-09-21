import React, { useState, useEffect } from 'react';
import SessionController from '../networking/controllers/SessionController';

const ShowUser = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    const getUser = async () => {
      setUser(await SessionController.getUser());
    };
    getUser();
  }, [user]);

  return (
    <h1>{user || 'Unauthorized'}</h1>
  );
};

export default ShowUser;
