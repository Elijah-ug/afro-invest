import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Mail, Lock, ArrowRight, UserPlus } from 'lucide-react';
import { useLoginMutation } from '@/store/features/userQuery';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // RTK Query mutation hook
  const [login, { isLoading }] = useLoginMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log('name==>', name);
    console.log('value==>', value);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Call login mutation
      await login(formData).unwrap();
      // On success, navigate to dashboard
      navigate('/dashboard');
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className='min-h-screen bg-web3-animated flex items-center justify-center px-4 py-12'>
      <div className='w-full max-w-md'>
        {/* Logo/Brand */}
        <div className='text-center mb-8'>
          <Link to='/' className='text-3xl font-bold text-gradient-web3 hover:text-cyan-400 transition-colors'>
            Afro Invest
          </Link>
          <p className='text-slate-400 mt-2'>Welcome back to your investment journey</p>
        </div>

        {/* Login Card */}
        <Card className='bg-slate-800/50 border border-slate-700 backdrop-blur-sm shadow-2xl glow-cyan'>
          <CardHeader className='space-y-1 pb-6'>
            <CardTitle className='text-2xl font-bold text-center text-white'>Sign In</CardTitle>
            <CardDescription className='text-center text-slate-400'>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Email Field */}
              <div className='space-y-2'>
                <Label htmlFor='email' className='text-slate-300'>
                  Email Address
                </Label>
                <div className='relative'>
                  <Mail className='absolute left-3 top-3 h-5 w-5 text-slate-500' />
                  {/* <Input/> */}
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Enter your email'
                    value={formData.email}
                    onChange={handleInputChange}
                    className='pl-10 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-cyan-400/20 h-12'
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className='space-y-2'>
                <Label htmlFor='password' className='text-slate-300'>
                  Password
                </Label>
                <div className='relative'>
                  <Lock className='absolute left-3 top-3 h-5 w-5 text-slate-500' />
                  <Input
                    id='password'
                    name='password'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter your password'
                    value={formData.password}
                    onChange={handleInputChange}
                    className='pl-10 pr-10 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-cyan-400/20 h-12'
                    required
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-3 text-slate-500 hover:text-slate-400 transition-colors'
                  >
                    {showPassword ? <EyeOff className='h-5 w-5' /> : <Eye className='h-5 w-5' />}
                  </button>
                </div>
              </div>

              {/* Forgot Password Link */}
              <div className='flex justify-end'>
                <Link to='/forgot-password' className='text-sm text-cyan-400 hover:text-cyan-300 transition-colors'>
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <Button
                type='submit'
                className='w-full bg-linear-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 glow-cyan'
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className='flex items-center space-x-2'>
                    <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                    <span>Signing In...</span>
                  </div>
                ) : (
                  <div className='flex items-center space-x-2'>
                    <span>Sign In</span>
                    <ArrowRight className='h-4 w-4' />
                  </div>
                )}
              </Button>
            </form>
            {/* Divider */}
            <div className='relative my-6'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-slate-600'></div>
              </div>
              <div className='relative flex justify-center text-sm '>
                <span className='px-2 bg-slate-800/50 text-slate-400'>Don't have an account?</span>
              </div>
            </div>

            {/* Register Link */}
            <div className='text-center'>
              <Link
                to='/register'
                className='inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium'
              >
                <UserPlus className='h-4 w-4' />
                <span>Create Account</span>
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className='text-center mt-8'>
          <p className='text-sm text-slate-500'>
            By signing in, you agree to our{' '}
            <Link to='/terms' className='text-cyan-400 hover:text-cyan-300 transition-colors'>
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to='/privacy' className='text-cyan-400 hover:text-cyan-300 transition-colors'>
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
