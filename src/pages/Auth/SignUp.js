import React, { useState } from 'react';
import Button from '../../redux-box/features/Button';
import google from '../../assets/svg/google.svg'
import facebook from '../../assets/svg/facebook.svg'

function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleNameSet = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className='w-[430px]'>
      <div className="mb-3 md:mb-18p relative">
        <input
          className="w-full border border-gray-2 rounded form-control pl-14 md:pl-16 roboto-regular font-normal text-gray-10 text-13 md:text-15 md:h-52p focus:border-gray-12"
          type="name"
          id="create-name"
          name="create-name"
          placeholder="Your Name"
          value={name}
          onChange={handleNameSet}
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
      <div className="mb-3 md:mb-18p relative">
        <input
          className="w-full border border-gray-2 rounded form-control pl-14 md:pl-16 roboto-regular font-normal text-gray-10 text-13 md:text-15 md:h-52p focus:border-gray-12"
          type="email"
          id="create-email"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <span className="absolute border-gray-2 top-2 h-26p md:top-3 md:h-30p border-r md:left-3 left-2 pl-1.5 pr-3">
          <svg className="mt-1.5 w-4 h-4 md:w-5 md:h-5" xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.87868 0.87868C0 1.75736 0 3.17157 0 6V8C0 10.8284 0 12.2426 0.87868 13.1213C1.75736 14 3.17157 14 6 14H12C14.8284 14 16.2426 14 17.1213 13.1213C18 12.2426 18 10.8284 18 8V6C18 3.17157 18 1.75736 17.1213 0.87868C16.2426 0 14.8284 0 12 0H6C3.17157 0 1.75736 0 0.87868 0.87868ZM3.5547 3.16795C3.09517 2.8616 2.4743 2.98577 2.16795 3.4453C1.8616 3.90483 1.98577 4.5257 2.4453 4.83205L7.8906 8.46225C8.5624 8.91012 9.4376 8.91012 10.1094 8.46225L15.5547 4.83205C16.0142 4.5257 16.1384 3.90483 15.8321 3.4453C15.5257 2.98577 14.9048 2.8616 14.4453 3.16795L9 6.79815L3.5547 3.16795Z" fill="#898989"></path>
          </svg>
        </span>
        <span className="signin-message"></span>
      </div>
      <div className="mb-2 md:mb-3 relative password-container">
        <input
          className="password-field w-full border border-gray-2 rounded form-control pl-14 md:pl-16 roboto-regular font-normal text-gray-10 text-13 md:text-15 md:h-52p focus:border-gray-12"
          type={showPassword ? 'text' : 'password'}
          name="password"
          id="create-password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <span
          className="absolute border-gray-2 top-2 h-26p md:top-3 md:h-30p border-r md:left-3 left-2 pl-1.5 pr-3 cursor-pointer"

        >
          <svg className="mt-0.5 md:mt-0 w-4 h-5 md:w-5 md:h-6 neg-transition-scale" xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.87868 9.11904C0 9.99772 0 11.4119 0 14.2404V15.2404C0 19.0116 0 20.8972 1.17157 22.0688C2.34315 23.2404 4.22876 23.2404 8 23.2404H10C13.7712 23.2404 15.6569 23.2404 16.8284 22.0688C18 20.8972 18 19.0116 18 15.2404V14.2404C18 11.4119 18 9.99772 17.1213 9.11904C16.2426 8.24036 14.8284 8.24036 12 8.24036H6C3.17157 8.24036 1.75736 8.24036 0.87868 9.11904ZM9 16.2404C9.55228 16.2404 10 15.7926 10 15.2404C10 14.6881 9.55228 14.2404 9 14.2404C8.44772 14.2404 8 14.6881 8 15.2404C8 15.7926 8.44772 16.2404 9 16.2404ZM12 15.2404C12 16.5466 11.1652 17.6578 10 18.0697V20.2404H8V18.0697C6.83481 17.6578 6 16.5466 6 15.2404C6 13.5835 7.34315 12.2404 9 12.2404C10.6569 12.2404 12 13.5835 12 15.2404Z" fill="#898989"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.8978 3.9514C6.07928 2.06218 9.25455 1.86447 11.6535 3.4685L12.0273 3.71839C13.8931 4.96591 14.8551 7.19065 14.4862 9.40454L12.5134 9.07576C12.7531 7.63721 12.128 6.1916 10.9156 5.38099L10.5419 5.1311C8.89174 4.02777 6.70764 4.16376 5.2071 5.46326L4.32433 6.22776C3.90685 6.58931 3.27531 6.54397 2.91375 6.12648C2.5522 5.709 2.59754 5.07746 3.01503 4.7159L3.8978 3.9514Z" fill="#898989"></path>
          </svg>
        </span>
        <span
          onClick={togglePasswordVisibility}
          className="password-show absolute top-11p h-8 cursor-pointer pl-1.5 pr-3 right-1.5"
        >
          {showPassword ? (
            <svg className="mt-5p md:mt-2.5 h-3 md:h-3.5" xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.77051 9C10.8751 9 11.7705 8.10457 11.7705 7C11.7705 5.89543 10.8751 5 9.77051 5C8.66594 5 7.77051 5.89543 7.77051 7C7.77051 8.10457 8.66594 9 9.77051 9ZM9.77051 11C11.9796 11 13.7705 9.20914 13.7705 7C13.7705 4.79086 11.9796 3 9.77051 3C7.56137 3 5.77051 4.79086 5.77051 7C5.77051 9.20914 7.56137 11 9.77051 11Z" fill="#898989"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M5.42941 3.63233C4.11029 4.58138 3.03435 5.74418 2.35413 6.57005C2.25436 6.69118 2.17984 6.78179 2.11811 6.86149C2.06925 6.92459 2.03813 6.96852 2.01782 7C2.03813 7.03148 2.06925 7.07541 2.11811 7.13851C2.17984 7.21821 2.25436 7.30882 2.35413 7.42995C3.03435 8.25582 4.11029 9.41862 5.42941 10.3677C6.75643 11.3224 8.24447 12 9.77027 12C11.2961 12 12.7841 11.3224 14.1111 10.3677C15.4303 9.41862 16.5062 8.25582 17.1864 7.42995C17.2862 7.30882 17.3607 7.21821 17.4224 7.13851C17.4713 7.07541 17.5024 7.03147 17.5227 7C17.5024 6.96852 17.4713 6.92458 17.4224 6.86149C17.3607 6.78179 17.2862 6.69118 17.1864 6.57005C16.5062 5.74418 15.4303 4.58138 14.1111 3.63233C12.7841 2.6776 11.2961 2 9.77027 2C8.24447 2 6.75643 2.6776 5.42941 3.63233ZM4.26138 2.00884C5.76442 0.927471 7.66034 0 9.77027 0C11.8802 0 13.7761 0.927472 15.2792 2.00885C16.7901 3.0959 17.9903 4.40025 18.7302 5.29853C18.7538 5.32717 18.7784 5.35662 18.8037 5.38694C19.1171 5.76236 19.5406 6.26957 19.5406 7C19.5406 7.73043 19.1171 8.23764 18.8037 8.61306C18.7784 8.64338 18.7538 8.67283 18.7302 8.70148C17.9903 9.59976 16.7901 10.9041 15.2792 11.9912C13.7761 13.0725 11.8802 14 9.77027 14C7.66034 14 5.76442 13.0725 4.26138 11.9912C2.75044 10.9041 1.55022 9.59975 0.810357 8.70147C0.786765 8.67283 0.762175 8.64338 0.736868 8.61306C0.423444 8.23764 -5.96046e-08 7.73043 0 7C0 6.26957 0.423445 5.76236 0.736869 5.38694C0.762176 5.35662 0.786766 5.32717 0.810358 5.29852C1.55022 4.40024 2.75044 3.0959 4.26138 2.00884Z" fill="#898989"></path>
            </svg>
          ) : (
            <svg className="md:mt-1 h-4 md:h-5" xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 22 19" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M19.9803 18.3977L3.07666 1.49408L4.57074 0L21.4743 16.9036L19.9803 18.3977Z" fill="#C8C8C8"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M15.9929 17.2707L14.4406 15.7184C13.4135 16.2565 12.3254 16.5941 11.2185 16.5941C9.60656 16.5941 8.03448 15.8782 6.63251 14.8696C5.2389 13.8669 4.1022 12.6384 3.38356 11.7659C3.27816 11.638 3.19943 11.5422 3.13422 11.458C3.08259 11.3914 3.04971 11.345 3.02826 11.3117C3.04971 11.2785 3.08259 11.232 3.13422 11.1654C3.19943 11.0812 3.27816 10.9854 3.38356 10.8575C4.08655 10.004 5.18959 8.80983 6.54184 7.81967L5.03242 6.31025C3.60813 7.39869 2.47352 8.63887 1.75261 9.51414C1.72769 9.54439 1.70172 9.5755 1.67499 9.60752L1.67497 9.60754C1.34384 10.0042 0.896484 10.54 0.896484 11.3117C0.896484 12.0834 1.34384 12.6192 1.67497 13.0159L1.6752 13.0161C1.70185 13.0481 1.72775 13.0791 1.75261 13.1093C2.53426 14.0583 3.80225 15.4363 5.39852 16.5847C6.98645 17.7272 8.98944 18.707 11.2185 18.707C12.9829 18.707 14.6055 18.0932 15.9929 17.2707ZM7.84501 4.6406C8.88436 4.20027 10.0187 3.91638 11.2185 3.91638C13.4476 3.91638 15.4506 4.89623 17.0385 6.03868C18.6348 7.18712 19.9028 8.56513 20.6845 9.51414C20.7094 9.54438 20.7353 9.57548 20.7621 9.60749L20.7621 9.60754C21.0932 10.0042 21.5406 10.54 21.5406 11.3117C21.5406 12.0834 21.0932 12.6192 20.7621 13.0159C20.7354 13.0479 20.7094 13.079 20.6845 13.1093C20.1703 13.7335 19.4458 14.5433 18.5558 15.3513L17.0597 13.8553C17.8837 13.1162 18.5651 12.3589 19.0535 11.7659C19.1589 11.638 19.2376 11.5422 19.3028 11.458C19.3545 11.3914 19.3874 11.345 19.4088 11.3117C19.3873 11.2784 19.3545 11.232 19.3028 11.1654C19.2376 11.0812 19.1589 10.9854 19.0535 10.8575C18.3349 9.98496 17.1982 8.7565 15.8045 7.75385C14.4026 6.7452 12.8305 6.02933 11.2185 6.02933C10.6364 6.02933 10.0595 6.12269 9.49389 6.28948L7.84501 4.6406Z" fill="#C8C8C8"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M15.3602 12.1556C15.4155 11.8829 15.4445 11.6007 15.4445 11.3117C15.4445 8.97781 13.5525 7.08582 11.2186 7.08582C10.9296 7.08582 10.6473 7.11483 10.3746 7.17009L15.3602 12.1556ZM7.69709 8.97478C7.25201 9.64413 6.99268 10.4476 6.99268 11.3117C6.99268 13.6456 8.88468 15.5376 11.2186 15.5376C12.0827 15.5376 12.8862 15.2783 13.5555 14.8332L11.9984 13.2761C11.7571 13.372 11.494 13.4247 11.2186 13.4247C10.0516 13.4247 9.10562 12.4787 9.10562 11.3117C9.10562 11.0363 9.15833 10.7732 9.25419 10.5319L7.69709 8.97478Z" fill="#C8C8C8"></path>
            </svg>
          )}
        </span>
      </div>

      <div className="mb-2 md:mb-3 relative password-container">
        <input
          className="password-field w-full border border-gray-2 rounded form-control pl-14 md:pl-16 roboto-regular font-normal text-gray-10 text-13 md:text-15 md:h-52p focus:border-gray-12"
          type={showPassword ? 'text' : 'password'}
          name="confirm-password"
          id="confirm-password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPassword}
          required
        />
        <span
          className="absolute border-gray-2 top-2 h-26p md:top-3 md:h-30p border-r md:left-3 left-2 pl-1.5 pr-3 cursor-pointer"

        >
          <svg className="mt-1 w-4 h-4 md:w-5 md:h-5" xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M4 5C4 2.23858 6.23858 0 9 0C11.7614 0 14 2.23858 14 5V6C14 6.55228 13.5523 7 13 7C12.4477 7 12 6.55228 12 6V5C12 3.34315 10.6569 2 9 2C7.34315 2 6 3.34315 6 5V6C6 6.55228 5.55228 7 5 7C4.44772 7 4 6.55228 4 6V5Z" fill="#898989"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M0.87868 5.87868C0 6.75736 0 8.17157 0 11V12C0 15.7712 0 17.6569 1.17157 18.8284C2.34315 20 4.22876 20 8 20H10C13.7712 20 15.6569 20 16.8284 18.8284C18 17.6569 18 15.7712 18 12V11C18 8.17157 18 6.75736 17.1213 5.87868C16.2426 5 14.8284 5 12 5H6C3.17157 5 1.75736 5 0.87868 5.87868ZM9 13C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13ZM12 12C12 13.3062 11.1652 14.4175 10 14.8293V17H8V14.8293C6.83481 14.4175 6 13.3062 6 12C6 10.3431 7.34315 9 9 9C10.6569 9 12 10.3431 12 12Z" fill="#898989"></path>
          </svg>
        </span>
      </div>

      <label className="roboto-medium pb-4 font-medium text-gray-10 text-xs md:text-sm cursor-pointer">
        By creating an account you agree to our <span className="text-blues-2 cursor-pointer">terms &amp; conditions</span>.
      </label>

      <div className="mt-4">
        <Button text="CREATE ACCOUNT" color="gray-12" textColor="white" width="w-full" hoverColor="yellow-1" />
      </div>


      <div className="md:mt-18p text-lg flex items-center">
        <hr className="border border-gray-2 w-full" />
        <p className="font-dm-sans text-gray-10 text-center text-sm md:text-base px-3 md:px-5 leading-5 whitespace-nowrap">
          or create account with
        </p>
        <hr className="border border-gray-2 w-full" />
      </div>

      <div className="flex gap-2.5 justify-center md:justify-between md:my-5 my-4">
        <Button icon={google} text="Google" color="reds-3" textColor="white" width="w-full" hoverColor="reds-5" />
        <Button icon={facebook} text="Facebook" color="blues-1" textColor="white" width="w-full" hoverColor="blues-3" />
      </div>
    </div>
  );
};

export default SignUp