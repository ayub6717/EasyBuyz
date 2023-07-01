import React from 'react';
import ExModal from '../../components/common/ExModal';
import ProductBnrIndex from '../home/banner/ProductBnrIndex';
import FeaturesProduct from '../home/features-product/FeaturesProduct';
import ForgetPassword from '../Auth/ForgetPassword';

const Sig = () => {

    return (
        <div>
            {/* The ExModal component will handle rendering the modals */}
            <ExModal contentKey="PRODUCT_BANNER_INDEX">
                <ProductBnrIndex />
            </ExModal>

            <ExModal contentKey="FEATURES_PRODUCT">
                <FeaturesProduct />
            </ExModal>

            <ExModal contentKey="F_INDEX">
                <ForgetPassword />
            </ExModal>
        </div>
    );
};

export default Sig;
