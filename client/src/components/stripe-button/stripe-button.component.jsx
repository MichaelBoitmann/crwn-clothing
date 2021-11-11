import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

// publishableKey must be the latest update from stripe
// take note of pk_test and the latest security that the
// dashboard.stripe.com security must be updated to make
// the transactions from the website reflected on stripe.com
// payments

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Jh6P2E7PzYBwrIDj5EiMLxc31HtSAYc9x1wY6fGyqPQy4UWuN9lGg1ouib1gsIxNFyEesIwPO1couVUGTTAiKNr00u3MFdp1V';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    }).then(response => {
      alert('Payment successful')
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert('There was an issue with your payment. Please sure you use the provided credit cart.');
    });
  };  

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
