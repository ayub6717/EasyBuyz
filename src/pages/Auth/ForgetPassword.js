import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux-box/actions/modalActions';
import Button from '../../redux-box/features/Button';


function ForgetPassword() {

    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const openModalHandler1 = () => {
        dispatch(openModal('TAB_INDEX'));
    };
    const handleResetPassword = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div className='w-[430px]'>
            <div className="text-center mt-2">
                <h1 className="uppercase dm-bold font-bold text-gray-12 text-base md:text-xl">
                    Reset your password</h1>
                <p className="text-gray-10 text-sm md:text-base mt-1">
                    Enter your email to send password reset code</p>
            </div>
            <div className="mb-3 md:mb-18p relative mt-2">
                <input
                    className="w-full border border-gray-2 rounded form-control pl-14 md:pl-16 roboto-regular font-normal text-gray-10 text-13 md:text-15 md:h-52p focus:border-gray-12"
                    type="email"
                    id="reset-password"
                    name="reset-password"
                    placeholder="Email Address"
                    value={email}
                    onChange={handleResetPassword}
                    required
                />
                <span className="absolute border-gray-2 top-2 h-26p md:top-3 md:h-30p border-r md:left-3 left-2 pl-1.5 pr-3">
                    <svg
                        className="mt-1.5 w-4 h-4 md:w-5 md:h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                    >
                        <path
                            d="M16.3449 17.4054C16.8977 17.2902 17.2269 16.7117 16.9522 16.2183C16.3466 15.1307 15.3926 14.1749 14.1722 13.4465C12.6004 12.5085 10.6745 12 8.69333 12C6.71213 12 4.78628 12.5085 3.21448 13.4465C1.99405 14.1749 1.04002 15.1307 0.434441 16.2183C0.159743 16.7117 0.488979 17.2902 1.04179 17.4054C6.0886 18.4572 11.2981 18.4572 16.3449 17.4054Z"
                            fill="#898989"
                        ></path>
                        <circle cx="8.69336" cy="5" r="5" fill="#898989"></circle>
                    </svg>
                </span>
                <span className="signin-message"></span>
            </div>

            <Button text="SEND" color="gray-12" textColor="white" width="w-full" hoverColor="yellow-1" />

            <p className="text-center mt-5 text-sm md:text-base text-gray-10 roboto-medium font-medium">
                Back to <span onClick={openModalHandler1} className="text-gray-12 cursor-pointer back-signIn">Sign in</span>
            </p>
        </div>
    );
};

export default ForgetPassword