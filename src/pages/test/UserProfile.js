import React from 'react';

const UserProfile = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <div className='hi'>
      <h2>Welcome To {user.name}</h2>
      <img src={user.image} alt="User Avatar" />
    </div>
  );
};

export default UserProfile;
