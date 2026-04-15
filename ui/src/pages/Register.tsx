import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight, UserPlus, Network } from 'lucide-react';
import { useRegisterMutation } from '@/store/features/userQuery';
import { toast } from 'react-toastify';
import { DateOfBirth } from '@/utils/DateOfBirth';

export const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    nin: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const [register, { isLoading }] = useRegisterMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleDateChange = (date?: Date) => {
    setFormData((prev) => ({
      ...prev,
      dob: date ? date.toISOString() : '',
    }));
    console.log('Date of birth==>', formData.dob);
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { confirmPassword, agreeToTerms, ...userData } = formData;
      const res = await register(userData).unwrap();
      toast.success(res?.message);
      console.log('Response==>', res);

      return navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      toast.error('Oops! Registration failed. Please try again 💔');
    }
  };
  // console.log('Form data==>', formData);
  // For the cute date picker trigger
  const selectedDate = formData.dob ? new Date(formData.dob) : undefined;
  return (
    <div className='min-h-screen bg-web3-animated flex items-center justify-center px-4 py-12'>
      <div className=''>
        {/* Logo/Brand */}
        <div className='text-center mb-8'>
          <Link to='/' className='text-3xl font-bold text-linear-web3 hover:text-cyan-400 transition-all'>
            Afro Invest 🌍
          </Link>
          <p className='text-slate-400 mt-2'>Join Africa's leading investment platform 💰</p>
        </div>

        {/* Register Card */}
        <Card className='bg-slate-800/60 border border-slate-700/80 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden sm:w-lg lg:w-2xl w-xs'>
          <CardHeader className='space-y-1 pb-6 text-center'>
            <CardTitle className='text-3xl font-bold text-white tracking-tight'>Create Account ✨</CardTitle>
            <CardDescription className='text-slate-400'>
              Let's get you started on your investment journey
            </CardDescription>
          </CardHeader>

          <CardContent className='px-8'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Name Fields */}
              <div className='grid grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='firstname' className='text-slate-300'>
                    First Name
                  </Label>
                  <div className='relative'>
                    <User className='absolute left-3 top-3.5 h-4 w-4 text-purple-400' />
                    <Input
                      id='firstname'
                      name='firstname'
                      type='text'
                      placeholder='Aisha'
                      value={formData.firstname}
                      onChange={handleInputChange}
                      className='pl-9 bg-slate-900/70 border-slate-600 rounded-xl h-12 focus:border-purple-400 focus:ring-purple-500/30 placeholder:text-slate-500'
                      required
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='lastname' className='text-slate-300'>
                    Last Name
                  </Label>
                  <div className='relative'>
                    <User className='absolute left-3 top-3.5 h-4 w-4 text-purple-400' />
                    <Input
                      id='lastname'
                      name='lastname'
                      type='text'
                      placeholder='Okello'
                      value={formData.lastname}
                      onChange={handleInputChange}
                      className='pl-9 bg-slate-900/70 border-slate-600 rounded-xl h-12 focus:border-purple-400 focus:ring-purple-500/30 placeholder:text-slate-500'
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className='space-y-2'>
                <Label htmlFor='email' className='text-slate-300'>
                  Email Address
                </Label>
                <div className='relative'>
                  <Mail className='absolute left-3 top-3.5 h-4 w-4 text-purple-400' />
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='aisha@awesome.com'
                    value={formData.email}
                    onChange={handleInputChange}
                    className='pl-10 bg-slate-900/70 border-slate-600 rounded-xl h-12 focus:border-purple-400 focus:ring-purple-500/30 placeholder:text-slate-500'
                    required
                  />
                </div>
              </div>

              {/* Cute Date of Birth */}
              <div className='space-y-2'>
                <Label htmlFor='dob' className='text-slate-300 flex items-center gap-2'>
                  Date of Birth{' '}
                  <span className='text-xs text-purple-400'>(you'll be 36 in 2026 if born in 1990 🎂)</span>
                </Label>
                <DateOfBirth value={selectedDate} onChange={handleDateChange} />
                <p className='text-xs text-slate-500 pl-1'>Quick year jump included – no more endless clicking! 💕</p>
              </div>

              {/* Public Address */}
              <div className='space-y-2'>
                <Label htmlFor='address' className='text-slate-300'>
                  Public Address (Wallet)
                </Label>
                <div className='relative'>
                  <Network className='absolute left-3 top-3.5 h-4 w-4 text-purple-400' />
                  <Input
                    id='address'
                    name='address'
                    type='text'
                    placeholder='0xFDP...1234'
                    value={formData.address}
                    onChange={handleInputChange}
                    className='pl-9 bg-slate-900/70 border-slate-600 rounded-xl h-12 focus:border-purple-400 focus:ring-purple-500/30 placeholder:text-slate-500'
                  />
                </div>
              </div>

              {/* NIN */}
              <div className='space-y-2'>
                <Label htmlFor='nin' className='text-slate-300'>
                  National ID Number (optional)
                </Label>
                <div className='relative'>
                  <Network className='absolute left-3 top-3.5 h-4 w-4 text-purple-400' />
                  <Input
                    id='nin'
                    name='nin'
                    type='text'
                    placeholder='1234-5678-9012'
                    value={formData.nin}
                    onChange={handleInputChange}
                    className='pl-9 bg-slate-900/70 border-slate-600 rounded-xl h-12 focus:border-purple-400 focus:ring-purple-500/30 placeholder:text-slate-500'
                  />
                </div>
              </div>

              {/* Phone */}
              <div className='space-y-2'>
                <Label htmlFor='phone' className='text-slate-300'>
                  Phone Number
                </Label>
                <div className='relative'>
                  <Phone className='absolute left-3 top-3.5 h-4 w-4 text-purple-400' />
                  <Input
                    id='phone'
                    name='phone'
                    type='tel'
                    placeholder='+256 700 123 456'
                    value={formData.phone}
                    onChange={handleInputChange}
                    className='pl-9 bg-slate-900/70 border-slate-600 rounded-xl h-12 focus:border-purple-400 focus:ring-purple-500/30 placeholder:text-slate-500'
                  />
                </div>
                <p className='text-xs text-slate-500 pl-1'>For security & important updates 📲</p>
              </div>

              {/* Passwords */}
              <div className='space-y-2'>
                <Label htmlFor='password' className='text-slate-300'>
                  Password
                </Label>
                <div className='relative'>
                  <Lock className='absolute left-3 top-3.5 h-4 w-4 text-purple-400' />
                  <Input
                    id='password'
                    name='password'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Create a strong password 🔐'
                    value={formData.password}
                    onChange={handleInputChange}
                    className='pl-9 pr-10 bg-slate-900/70 border-slate-600 rounded-xl h-12 focus:border-purple-400 focus:ring-purple-500/30 placeholder:text-slate-500'
                    required
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-3.5 text-slate-400 hover:text-purple-400'
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
                  <Lock className='absolute left-3 top-3.5 h-4 w-4 text-purple-400' />
                  <Input
                    id='confirmPassword'
                    name='confirmPassword'
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder='Confirm your password'
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className='pl-9 pr-10 bg-slate-900/70 border-slate-600 rounded-xl h-12 focus:border-purple-400 focus:ring-purple-500/30 placeholder:text-slate-500'
                    required
                  />
                  <button
                    type='button'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className='absolute right-3 top-3.5 text-slate-400 hover:text-purple-400'
                  >
                    {showConfirmPassword ? <EyeOff className='h-4 w-4' /> : <Eye className='h-4 w-4' />}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <div className='flex items-start gap-3'>
                <input
                  id='agreeToTerms'
                  name='agreeToTerms'
                  type='checkbox'
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className='mt-1 h-5 w-5 accent-purple-500 border-slate-600 bg-slate-900/70 rounded'
                  required
                />
                <label htmlFor='agreeToTerms' className='text-sm text-slate-300 leading-relaxed'>
                  I agree to the{' '}
                  <Link to='/terms' className='text-purple-400 hover:text-purple-300 underline'>
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to='/privacy' className='text-purple-400 hover:text-purple-300 underline'>
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type='submit'
                disabled={isLoading}
                className='w-full h-14 text-lg font-semibold rounded-2xl bg-linear-to-r from-purple-500 via-pink-500 to-violet-500 hover:from-purple-600 hover:via-pink-600 hover:to-violet-600 shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-[0.985]'
              >
                {isLoading ? (
                  <span className='flex items-center gap-3'>
                    <div className='w-5 h-5 border-2 border-white/80 border-t-transparent rounded-full animate-spin' />
                    Creating your account...
                  </span>
                ) : (
                  <span className='flex items-center gap-3'>
                    Create Account <UserPlus className='h-5 w-5' /> <ArrowRight className='h-5 w-5' />
                  </span>
                )}
              </Button>
            </form>

            {/* Already have account */}
            <div className='text-center mt-8'>
              <p className='text-slate-400 text-sm'>
                Already have an account?{' '}
                <Link to='/login' className='text-purple-400 hover:text-purple-300 font-medium underline'>
                  Sign in here →
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className='text-center mt-8 text-xs text-slate-500'>
          Join thousands building generational wealth across Africa 💎
        </div>
      </div>
    </div>
  );
};
