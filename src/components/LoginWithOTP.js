// Correctly placed imports at the top level
import React, { useState } from 'react';
import { auth } from '../firebase';
import { RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider } from 'firebase/auth';

const LoginWithOTP = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [verificationId, setVerificationId] = useState(null);

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container',
        {
          size: 'invisible',
          callback: (response) => {
            console.log('Recaptcha resolved', response);
          },
          'expired-callback': () => {
            console.log('Recaptcha expired');
          },
        },
        auth
      );
    }
  };

  const requestOTP = async (e) => {
    e.preventDefault();
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    try {
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setVerificationId(confirmationResult.verificationId);
      setMessage('OTP sent! Please check your phone.');
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  };

  const verifyOTP = async (e) => {
    e.preventDefault();
    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      await auth.signInWithCredential(credential);
      setMessage('Successfully logged in!');
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Login with OTP</h2>
      <form onSubmit={verificationId ? verifyOTP : requestOTP}>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your phone number"
          required
          disabled={!!verificationId}
        />
        {verificationId && (
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            required
          />
        )}
        <button type="submit">{verificationId ? 'Verify OTP' : 'Request OTP'}</button>
      </form>
      <div id="recaptcha-container"></div>
      {message && <p>{message}</p>}
    </div>
  );
};

// Correctly placed export at the top level
export default LoginWithOTP;
