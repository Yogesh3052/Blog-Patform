import React from 'react';
import SignUpForm from '../components/auth/SignUpForm';

interface SignUpProps {
  setIsAuthenticated: (value: boolean) => void;
}

const SignUp: React.FC<SignUpProps> = ({ setIsAuthenticated }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <SignUpForm setIsAuthenticated={setIsAuthenticated} />
      </div>
    </div>
  );
};

export default SignUp;