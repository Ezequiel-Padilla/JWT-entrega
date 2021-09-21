import React, { useEffect } from 'react';
import SessionController from '../networking/controllers/SessionController';

const RefreshToken = () => {
  useEffect(() => {
    SessionController.refreshToken();
  }, []);

  return (
    <h1>refresh</h1>
  );
};

export default RefreshToken;
