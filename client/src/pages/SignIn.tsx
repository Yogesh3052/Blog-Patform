import React from 'react';
import SignInForm from '../components/auth/SignInForm';

interface SignInProps {
  setIsAuthenticated: (value: boolean) => void;
}

const SignIn: React.FC<SignInProps> = ({ setIsAuthenticated }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <SignInForm setIsAuthenticated={setIsAuthenticated} />
      </div>
    </div>
  );
};

export default SignIn;