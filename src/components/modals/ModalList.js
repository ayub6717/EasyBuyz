import React from 'react';
import CustomModal from '../common/CustomModal';
import ForgetPassword from '../../pages/Auth/ForgetPassword';

const Sig = () => {

    return (
        <div>
            <CustomModal contentKey="F_INDEX">
                <ForgetPassword />
            </CustomModal>
        </div>
    );
};

export default Sig;
