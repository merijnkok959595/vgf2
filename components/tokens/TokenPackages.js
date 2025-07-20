import { useState } from 'react';
import { motion } from 'framer-motion';
import { TOKEN_PACKAGES } from '../../lib/hume';
import { 
  CheckIcon,
  StarIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

export default function TokenPackages() {
  const [selectedPackage, setSelectedPackage] = useState('popular');

  const handlePurchase = (packageId) => {
    // TODO: Implement Stripe checkout
    console.log('Purchase package:', packageId);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose Your Token Package
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Select the perfect package for your AI conversation needs. 
            All packages include bonus tokens and flexible usage.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {TOKEN_PACKAGES.map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-8 ring-1 ring-gray-200 ${
                pkg.popular 
                  ? 'bg-blue-600 text-white shadow-xl ring-blue-600' 
                  : 'bg-white text-gray-900'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 px-3 py-2 text-sm font-medium text-white text-center">
                  Most Popular
                </div>
              )}

              <div className="text-center">
                <h3 className={`text-lg font-semibold ${
                  pkg.popular ? 'text-white' : 'text-gray-900'
                }`}>
                  {pkg.name}
                </h3>
                
                <div className="mt-4 flex items-baseline justify-center">
                  <span className={`text-4xl font-bold tracking-tight ${
                    pkg.popular ? 'text-white' : 'text-gray-900'
                  }`}>
                    €{pkg.price}
                  </span>
                  <span className={`ml-1 text-sm font-medium ${
                    pkg.popular ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    /one-time
                  </span>
                </div>

                <p className={`mt-2 text-sm ${
                  pkg.popular ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {pkg.description}
                </p>
              </div>

              <div className="mt-8">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckIcon className={`h-5 w-5 ${
                      pkg.popular ? 'text-blue-200' : 'text-green-500'
                    }`} />
                    <span className={`ml-3 text-sm ${
                      pkg.popular ? 'text-blue-100' : 'text-gray-700'
                    }`}>
                      {pkg.tokens.toLocaleString()} tokens
                    </span>
                  </div>
                  
                  {pkg.bonus > 0 && (
                    <div className="flex items-center">
                      <StarIcon className={`h-5 w-5 ${
                        pkg.popular ? 'text-yellow-300' : 'text-yellow-500'
                      }`} />
                      <span className={`ml-3 text-sm ${
                        pkg.popular ? 'text-blue-100' : 'text-gray-700'
                      }`}>
                        +{pkg.bonus.toLocaleString()} bonus tokens
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center">
                    <CheckIcon className={`h-5 w-5 ${
                      pkg.popular ? 'text-blue-200' : 'text-green-500'
                    }`} />
                    <span className={`ml-3 text-sm ${
                      pkg.popular ? 'text-blue-100' : 'text-gray-700'
                    }`}>
                      All AI agents available
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <CheckIcon className={`h-5 w-5 ${
                      pkg.popular ? 'text-blue-200' : 'text-green-500'
                    }`} />
                    <span className={`ml-3 text-sm ${
                      pkg.popular ? 'text-blue-100' : 'text-gray-700'
                    }`}>
                      No expiration date
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <CheckIcon className={`h-5 w-5 ${
                      pkg.popular ? 'text-blue-200' : 'text-green-500'
                    }`} />
                    <span className={`ml-3 text-sm ${
                      pkg.popular ? 'text-blue-100' : 'text-gray-700'
                    }`}>
                      Priority support
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handlePurchase(pkg.id)}
                  className={`mt-8 w-full rounded-lg px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    pkg.popular
                      ? 'bg-white text-blue-600 hover:bg-gray-50 focus-visible:outline-white'
                      : 'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Token Usage Guide
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">How tokens work</h4>
                <p>Tokens are consumed based on conversation duration. Each agent has different pricing per minute.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Free trial</h4>
                <p>New users get 500 free tokens to experience our AI agents before purchasing.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">No expiration</h4>
                <p>Your tokens never expire. Use them whenever you want to chat with our AI agents.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 