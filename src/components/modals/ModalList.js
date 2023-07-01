import React from 'react';
import CustomModal from '../common/CustomModal';
import ProductBnrIndex from '../../pages/home/banner/ProductBnrIndex';
import FeaturesProduct from '../../pages/home/features-product/FeaturesProduct';
import ForgetPassword from '../../pages/Auth/ForgetPassword';

const Sig = () => {

    return (
        <div>
            {/* The CustomModal component will handle rendering the modals */}
            <CustomModal contentKey="PRODUCT_BANNER_INDEX">
                <ProductBnrIndex />
            </CustomModal>

            <CustomModal contentKey="FEATURES_PRODUCT">
                <FeaturesProduct />
            </CustomModal>

            <CustomModal contentKey="F_INDEX">
                <ForgetPassword />
            </CustomModal>
        </div>
    );
};

export default Sig;
