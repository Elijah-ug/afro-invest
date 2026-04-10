import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight, UserPlus, Network } from 'lucide-react';

export const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert('Please fill in all required fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    if (!formData.agreeToTerms) {
      alert('Please agree to the Terms of Service and Privacy Policy');
      return;
    }

    setIsLoading(true);

    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      // For now, just navigate to dashboard on successful registration
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className='min-h-screen bg-web3-animated flex items-center justify-center px-4 py-12'>
      <div className='w-full max-w-md'>
        {/* Logo/Brand */}
        <div className='text-center mb-8'>
          <Link to='/' className='text-3xl font-bold text-gradient-web3 hover:text-cyan-400 transition-colors'>
            Afro Invest
          </Link>
          <p className='text-slate-400 mt-2'>Join Africa's leading investment platform</p>
        </div>

        {/* Register Card */}
        <Card className='bg-slate-800/50 border border-slate-700 backdrop-blur-sm shadow-2xl glow-purple sm:w-xl'>
          <CardHeader className='space-y-1 pb-6'>
            <CardTitle className='text-2xl font-bold text-center text-white'>Create Account</CardTitle>
            <CardDescription className='text-center text-slate-400'>
              Start your investment journey today
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className='space-y-4'>
              {/* Name Fields */}
              <div className='grid grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='firstName' className='text-slate-300'>
                    First Name
                  </Label>
                  <div className='relative'>
                    <User className='absolute left-3 top-4 h-4 w-4 text-slate-500' />
                    <Input
                      id='firstName'
                      name='firstName'
                      type='text'
                      placeholder='John'
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className='pl-9 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-purple-400 focus:ring-purple-400/20 h-12'
                      required
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='lastName' className='text-slate-300'>
                    Last Name
                  </Label>
                  <div className='relative'>
                    <User className='absolute left-3 top-4 h-4 w-4 text-slate-500' />
                    <Input
                      id='lastName'
                      name='lastName'
                      type='text'
                      placeholder='Doe'
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className='pl-9 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-purple-400 focus:ring-purple-400/20 h-12'
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Email Field */}
              <div className='space-y-2'>
                <Label htmlFor='email' className='text-slate-300'>
                  Email Address
                </Label>
                <div className='relative'>
                  <Mail className='absolute left-3 top-4 h-5 w-5 text-slate-500' />
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='john@example.com'
                    value={formData.email}
                    onChange={handleInputChange}
                    className='pl-10 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-purple-400 focus:ring-purple-400/20 h-12'
                    required
                  />
                </div>
              </div>

              {/* Address Field */}
              <div className='space-y-2'>
                <Label htmlFor='address' className='text-slate-300'>
                  Public Address
                </Label>
                <div className='relative'>
                  <Network className='absolute left-3 top-4 h-4 w-4 text-slate-500' />
                  <Input
                    id='address'
                    name='address'
                    type='text'
                    placeholder='0xfDP.....'
                    value={formData.address}
                    onChange={handleInputChange}
                    className='pl-9 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-purple-400 focus:ring-purple-400/20 h-12'
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className='space-y-2'>
                <Label htmlFor='phone' className='text-slate-300'>
                  Phone Number
                </Label>
                <div className='relative'>
                  <Phone className='absolute left-3 top-4 h-4 w-4 text-slate-500' />
                  <Input
                    id='phone'
                    name='phone'
                    type='tel'
                    placeholder='+256 XXX XXX XXX'
                    value={formData.phone}
                    onChange={handleInputChange}
                    className='pl-9 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-purple-400 focus:ring-purple-400/20 h-12'
                  />
                </div>
                <p className='text-xs text-slate-500'>We'll use this for account security and notifications</p>
              </div>

              {/* Password Fields */}
              <div className='space-y-2'>
                <Label htmlFor='password' className='text-slate-300'>
                  Password
                </Label>
                <div className='relative'>
                  <Lock className='absolute left-3 top-4 h-4 w-4 text-slate-500' />
                  <Input
                    id='password'
                    name='password'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Create a strong password'
                    value={formData.password}
                    onChange={handleInputChange}
                    className='pl-9 pr-9 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-purple-400 focus:ring-purple-400/20 h-12'
                    required
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-4 text-slate-500 hover:text-slate-400 transition-colors'
                  >
                    {showPassword ? <EyeOff className='h-4 w-4' /> : <Eye className='h-4 w-4' />}
                  </button>
                </div>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='confirmPassword' className='text-slate-300'>
                  Confirm Password
                </Label>
                <div className='relative'>
                  <Lock className='absolute left-3 top-4 h-4 w-4 text-slate-500' />
                  <Input
                    id='confirmPassword'
                    name='confirmPassword'
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder='Confirm your password'
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className='pl-9 pr-9 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-purple-400 focus:ring-purple-400/20 h-12'
                    required
                  />
                  <button
                    type='button'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className='absolute right-3 top-4 text-slate-500 hover:text-slate-400 transition-colors'
                  >
                    {showConfirmPassword ? <EyeOff className='h-4 w-4' /> : <Eye className='h-4 w-4' />}
                  </button>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className='flex items-start space-x-3'>
                <input
                  id='agreeToTerms'
                  name='agreeToTerms'
                  type='checkbox'
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className='mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-slate-600 rounded bg-slate-900/50'
                  required
                />
                <div className='text-sm'>
                  <label htmlFor='agreeToTerms' className='text-slate-300'>
                    I agree to the{' '}
                    <Link to='/terms' className='text-purple-400 hover:text-purple-300 transition-colors underline'>
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to='/privacy' className='text-purple-400 hover:text-purple-300 transition-colors underline'>
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type='submit'
                className='w-full bg-linear-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 glow-purple'
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className='flex items-center space-x-2'>
                    <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                    <span>Creating Account...</span>
                  </div>
                ) : (
                  <div className='flex items-center space-x-2'>
                    <UserPlus className='h-4 w-4' />
                    <span>Create Account</span>
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
              <div className='relative flex justify-center text-sm'>
                <span className='px-2 bg-slate-800/50 text-slate-400'>Already have an account?</span>
              </div>
            </div>

            {/* Login Link */}
            <div className='text-center'>
              <Link
                to='/login'
                className='inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors font-medium'
              >
                <span>Sign In Instead</span>
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className='text-center mt-8'>
          <p className='text-sm text-slate-500'>
            Join thousands of Africans building generational wealth through smart investing.
          </p>
        </div>
      </div>
    </div>
  );
};
