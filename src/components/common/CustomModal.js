import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../redux-box/actions/modalActions';

const ExModal = ({ contentKey, children }) => {
  const { isOpen, content } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const modalRef = useRef(null);

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  const shouldRenderContent = isOpen && contentKey === content;

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        dispatch(closeModal());
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, dispatch]);

  return (
    <>
      {shouldRenderContent && (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[60] outline-none focus:outline-none">
          <div className="fixed inset-0 bg-black opacity-75"></div>
          <div className="bg-white rounded-lg p-6 w-auto relative" ref={modalRef}>
            <button
              className="absolute top-[-8px] right-[-2px] p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={closeModalHandler}
            >
              <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default ExModal;
