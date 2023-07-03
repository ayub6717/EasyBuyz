import React, { useState } from 'react';
import { useLoginMutation } from '../../redux-box/api/userLoginApi';
import UserProfile from './UserProfile';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({ email, password });
      // Store the access token in local storage
      localStorage.setItem('accessToken', data.access_token);
      setLoggedIn(true);
      setUser(data.response.records.user);
      console.log('Login successful');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      {!loggedIn ? (
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      ) : (
        <UserProfile user={user} />
      )}
    </div>
  );
};

export default LoginForm;