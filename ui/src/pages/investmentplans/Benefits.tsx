import { Shield, TrendingUp, DollarSign } from 'lucide-react';

export const Benefits = () => {
  const features = [
    {
      id: 'secure',
      icon: Shield,
      title: 'Secure & Regulated',
      description: 'Bank-level security with full regulatory compliance across all operating countries',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    },
    {
      id: 'returns',
      icon: TrendingUp,
      title: 'Proven Returns',
      description: 'Consistent performance with transparent reporting and real-time portfolio tracking',
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
    },
    {
      id: 'minimums',
      icon: DollarSign,
      title: 'Low Minimums',
      description: 'Start investing with as little as $10. No barriers for everyday Africans',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    },
  ];

  return (
    <div>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3'>
            Built for African Investors
          </h2>
          <p className='sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
            Everything you need to invest confidently
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
          {features.map(({ id, icon: Icon, title, description, color, bgColor }) => (
            <div
              key={id}
              className='group rounded-2xl p-6 md:p-8 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300 flex flex-col items-center text-center'
            >
              <div className={`p-4 rounded-xl ${bgColor} mb-5 transition-transform group-hover:scale-105`}>
                <Icon className={`h-8 w-8 ${color}`} />
              </div>

              <h3 className='font-semibold text-lg text-gray-900 dark:text-white mb-2 tracking-tight'>{title}</h3>

              <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed'>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
