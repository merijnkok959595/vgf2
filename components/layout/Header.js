import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  Bars3Icon, 
  XMarkIcon, 
  UserCircleIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Meet Our Agents', href: '/agents' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Pricing', href: '/pricing' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  
  // Mock user data - replace with actual auth state
  const user = null; // { name: 'John Doe', tokens: 1250 }
  const tokenBalance = user?.tokens || 500; // Default free trial tokens

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Voice AI Marketplace</span>
            <div className="flex items-center">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">VoiceAI</span>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 ${
                router.pathname === item.href
                  ? 'text-blue-600'
                  : 'text-gray-900 hover:text-blue-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
          {/* Token Balance */}
          <div className="flex items-center bg-green-50 px-3 py-2 rounded-lg">
            <CurrencyDollarIcon className="h-4 w-4 text-green-600 mr-1" />
            <span className="text-sm font-medium text-green-700">
              {tokenBalance.toLocaleString()} tokens
            </span>
          </div>
          
          {/* User Menu */}
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">{user.name}</span>
              <button className="text-sm font-semibold text-gray-900 hover:text-blue-600">
                Dashboard
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                href="/auth/login"
                className="text-sm font-semibold text-gray-900 hover:text-blue-600"
              >
                Sign in
              </Link>
              <Link
                href="/auth/register"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Voice AI Marketplace</span>
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">V</span>
                  </div>
                  <span className="ml-2 text-xl font-bold text-gray-900">VoiceAI</span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                        router.pathname === item.href
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-900 hover:bg-gray-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  {user ? (
                    <div className="space-y-4">
                      <div className="flex items-center bg-green-50 px-3 py-2 rounded-lg">
                        <CurrencyDollarIcon className="h-4 w-4 text-green-600 mr-1" />
                        <span className="text-sm font-medium text-green-700">
                          {tokenBalance.toLocaleString()} tokens
                        </span>
                      </div>
                      <div className="space-y-2">
                        <span className="block text-sm text-gray-700">{user.name}</span>
                        <button className="block text-sm font-semibold text-gray-900 hover:text-blue-600">
                          Dashboard
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Link
                        href="/auth/login"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Sign in
                      </Link>
                      <Link
                        href="/auth/register"
                        className="-mx-3 block rounded-lg bg-blue-600 px-3 py-2.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-blue-500"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Get Started
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 