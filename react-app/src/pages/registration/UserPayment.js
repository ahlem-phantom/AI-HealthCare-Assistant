import React, { useContext } from "react";
//GENERAL
import { UserContext } from "./UserContext";
import axios from 'axios';
import API_BASE_URL from "../../api-config";
import Swal from 'sweetalert2';
import StripeCheckout from 'react-stripe-checkout';
import visaLogo from "../../assets/visa.png";
import mastercardLogo from "../../assets/mastercard.png";
import amexLogo from "../../assets/amex.png";
import discoverLogo from "../../assets/discover.png";

const STRIPE_PUBLISHABLE = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

const CARD_LOGOS = {
  visa: visaLogo,
  mastercard: mastercardLogo,
  amex: amexLogo,
  discover: discoverLogo
};

const CURRENCY = 'USD';
const successPayment = data => {
  Swal.fire({  
    title: 'Successful Payment',  
    text: 'You have been successfully charged for this transaction',
    icon: 'success'
  })
  console.log(data);
};

const errorPayment = data => {
  alert('Payment Error');
  console.log(data);
};

const onToken = (amount, description) => token =>
  axios.post(`${API_BASE_URL}/stripe`,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: amount
    })
    .then(successPayment)
    .catch(errorPayment);


const UserPayment = (props) => {
  const [state] = useContext(UserContext);
  const { user } = state;
  
  const cardsLogo = [
    "visa",
    "mastercard",
    "amex",
    "discover",
  ];

  const name = 'NearestDoctor Premium';
  const description = `${user.plan === '30' ? 'Basic' : user.plan === '60' ? 'Pro' : 'Premium'} Plan Subscription`;
  const amount = parseInt(user.plan) * 100;

  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-slate-800">Payment Method</h2>
        <p className="text-slate-500 mt-2">Finalize your subscription to unlock all premium features</p>
      </div>

      <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 border-dashed">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            {cardsLogo.map((logo) => (
              <div key={logo} className="w-12 h-8 bg-white rounded-md shadow-sm border border-slate-100 flex items-center justify-center p-1.5 overflow-hidden">
                <img
                  src={CARD_LOGOS[logo]}
                  alt={logo}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className="text-center space-y-2">
            <div className="inline-block px-4 py-1.5 bg-sky-50 text-sky-600 rounded-full text-xs font-black uppercase tracking-widest border border-sky-100">
              Secure Checkout
            </div>
            <p className="text-slate-400 text-sm">Amount to pay: <span className="text-slate-900 font-black text-xl">${user.plan}.00</span></p>
          </div>

          <div className="pt-4 w-full flex justify-center">
            <StripeCheckout
              image="https://user-images.githubusercontent.com/78981558/155504905-3bd2d8db-64f5-413c-b7d2-d4e7842ddad8.png"
              name={name}
              description={description}
              amount={amount}
              token={onToken(amount, description)}
              currency={CURRENCY}
              stripeKey={STRIPE_PUBLISHABLE}
              className="!shadow-xl !rounded-2xl"
            >
              <button className="bg-slate-900 hover:bg-black text-white font-bold px-12 py-4 rounded-2xl shadow-xl shadow-slate-200 transition-all transform hover:-translate-y-1 active:scale-[0.98] flex items-center gap-3">
                <svg className="w-5 h-5 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,8H4V6H20V8M20,18H4V12H20V18M20,4H4C2.89,4 2,4.89 2,6V18C2,19.11 2.89,20 4,20H20C21.11,20 22,19.11 22,18V6C22,4.89 21.11,4 20,4Z" />
                </svg>
                Pay with Stripe
              </button>
            </StripeCheckout>
          </div>
          
          <div className="flex items-center gap-2 text-slate-400 text-xs mt-2">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            SSL Encrypted & Secure
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPayment;
