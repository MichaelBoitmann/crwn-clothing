import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Jh6P2E7PzYBwrIDj5EiMLxc31HtSAYc9x1wY6fGyqPQy4UWuN9lGg1ouib1gsIxNFyEesIwPO1couVUGTTAiKNr00u3MFdp1V';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout 
            label='Click to Pay'
            name='CRWN CLOTHING LTD.'
            billingAddress
            shippingAddress
            image='https://sbgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;