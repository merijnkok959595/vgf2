import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon,
  ClockIcon,
  ShieldCheckIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: '24/7 Availability',
    description: 'Your AI companions are always ready to chat, day or night.',
    icon: ClockIcon,
  },
  {
    name: 'Emotional Intelligence',
    description: 'Advanced AI that understands and responds to your emotions.',
    icon: SparklesIcon,
  },
  {
    name: 'Secure & Private',
    description: 'Your conversations are protected with enterprise-grade security.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Natural Conversations',
    description: 'Fluid, human-like conversations that feel genuine and engaging.',
    icon: ChatBubbleLeftRightIcon,
  },
];

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="#" className="inline-flex space-x-6">
                <span className="rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10">
                  What's new
                </span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                  <span>Just launched</span>
                </span>
              </a>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Meet Your AI Companions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Connect with intelligent AI agents who understand, support, and inspire you. 
              From wellness coaching to creative collaboration, find your perfect AI companion.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/agents"
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Meet Our Agents
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                View Pricing <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-[76rem] flex-none rounded-md bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-xl lg:p-4"
            >
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="aspect-[3/4] rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 p-4 flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-3">
                      <span className="text-white font-bold text-lg">AI</span>
                    </div>
                    <div className="text-center">
                      <div className="h-2 bg-gray-200 rounded w-16 mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded w-12"></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Advanced AI Technology</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for meaningful conversations
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our AI agents are powered by cutting-edge technology that enables natural, 
            empathetic, and intelligent conversations tailored to your needs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 