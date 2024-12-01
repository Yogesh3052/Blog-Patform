import React from 'react';
import SignInForm from '../components/auth/SignInForm';

const SignIn = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;