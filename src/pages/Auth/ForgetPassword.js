import React from 'react'

function ForgetPassword({handleOpenModal}) {
    return (
        <div>ForgetPassword
            <p className="text-center mt-5 text-sm md:text-base text-gray-10 roboto-medium font-medium">
                Back to <span onClick={handleOpenModal} className="text-gray-12 cursor-pointer back-signIn">Sign in</span>
            </p>
        </div>
    )
}

export default ForgetPassword