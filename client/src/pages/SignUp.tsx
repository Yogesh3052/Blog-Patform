import React from 'react';
import SignUpForm from '../components/auth/SignUpForm';

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;