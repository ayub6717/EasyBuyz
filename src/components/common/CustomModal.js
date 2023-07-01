import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux-box/actions/modalActions';

export default function CustomModal({ title, children, onClose }) {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.showModal);
  const modalRef = useRef(null);

  const handleCloseModal = useCallback(() => {
    dispatch(closeModal());
    onClose && onClose();
  }, [dispatch, onClose]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    if (showModal) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showModal, handleCloseModal]);

  return (
    <>
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[60] outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl" ref={modalRef}>
              <div className="w-[508px] h-96 border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={handleCloseModal}
                >
                  <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
                <div className="relative px-8 pb-8 flex-auto">
                  <div className="text-lg leading-relaxed">{children}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}
