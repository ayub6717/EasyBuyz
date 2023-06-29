/* eslint-disable no-script-url */
import { useState } from 'react'
import Logo from '../../assets/images/logos/logo.png'
import SearchField from '../common/SearchField'
import dropImg from '../../assets/images/profile/user.png'
import wishlist from '../../assets/svg/wishlist.svg'
import cart from '../../assets/svg/cart.svg'
import trackOrder from '../../assets/svg/trackOrder.svg'
import user from '../../assets/svg/user.svg'
import adminIcon from '../../assets/svg/adminIcon.svg'
import logout from '../../assets/svg/logout.svg'
import TopHeadBtn from '../common/TopHeadBtn'
import CustomDropdown from '../common/CustomDropdown'
import Modal from '../common/Modal'
import Tab from '../common/Tab'
import Login from '../../pages/Auth/Login'
import SignUp from '../../pages/Auth/SignUp'
function Header() {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const buttonContent = (
        <div className='flex flex-col justify-center items-center'>
            <img
                className="bg-gray-100 items-center h-7 w-7 rounded-full dark:text-gray-2 hover:text-purple-500 cursor-pointer"
                src={dropImg}
                alt="dropImg"
            />
            <span className="text-[10px] text-[#898989] font-medium font-dm-sans mt-2 leading-3">
                Agatha Wilium
            </span>
        </div>
    );

    const menuItems = [
        { label: 'My Account', href: 'javascript:void(0)', image: user },
        { label: 'Admin Panel', href: 'javascript:void(0)', image: adminIcon },
        { label: 'Vendor Panel', href: 'javascript:void(0)', image: adminIcon },
        { label: 'Logout', href: 'javascript:void(0)', image: logout },
    ];



    return (
        <>
            <div className='border-b border-[#dfdfdf]'>
                <Modal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    title="Modal Title"
                    onClose={handleCloseModal}
                    buttonLabel="Open regular modal"
                >
                    <Tab tabs={['Sign In', 'Sign Up',]}>
                        <Login />
                        <SignUp />
                    </Tab>

                </Modal>
                <div className='py-4 mx-4 lg:mx-4 xl:mx-32 2xl:mx-64 3xl:mx-92'>
                    <div className='flex'>
                        <div className='w-[25%]'>
                            <img src={Logo} alt="logo" />
                        </div>
                        <div className='w-[45%]'>
                            <SearchField />
                        </div>
                        <div className='flex items-center justify-end w-[30%]'>
                            <CustomDropdown buttonContent={buttonContent} menuItems={menuItems} />
                            <div onClick={handleOpenModal}>
                                <TopHeadBtn img={user} name="Account" cartList />
                            </div>
                            <TopHeadBtn img={wishlist} name="Wishlist" cartList />
                            <TopHeadBtn img={cart} name="Your Cart" cartList />
                            <TopHeadBtn img={trackOrder} name="Track order" cartList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header