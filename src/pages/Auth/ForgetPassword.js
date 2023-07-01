import React from 'react'
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux-box/actions/modalAct';


function ForgetPassword() {
        // Modal component pass
        const dispatch = useDispatch();
        const openModalHandler1 = () => {
            dispatch(openModal('TAB_INDEX')); // Pass the same identifier used in the Login component
        };
    return (
        <div>ForgetPassword
            <p className="text-center mt-5 text-sm md:text-base text-gray-10 roboto-medium font-medium">
                Back to <span onClick={openModalHandler1} className="text-gray-12 cursor-pointer back-signIn">Sign in</span>
            </p>
        </div>
    )
}

export default ForgetPassword