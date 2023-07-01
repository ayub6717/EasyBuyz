import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux-box/actions/modalAct';
const Log = () => {
  const dispatch = useDispatch();

  const openModalHandler = () => {
    dispatch(openModal()); // Pass the Signup component as the content
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={openModalHandler}>Open Signup</button>
    </div>
  );
};

export default Log;
