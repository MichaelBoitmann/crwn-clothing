import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;


// import { CustomButtonContainer } from './custom-button.styles';

// const CustomButton = ({ children, ...props }) => (
//   <CustomButtonContainer {...props}>
//     {children}
//   </CustomButtonContainer>
// );

// export default CustomButton;