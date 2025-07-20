import Layout from '../components/layout/Layout';
import TokenPackages from '../components/tokens/TokenPackages';
import { motion } from 'framer-motion';
import { 
  CheckIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'No monthly fees',
    description: 'Pay only for what you use. No recurring charges or hidden fees.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Tokens never expire',
    description: 'Your tokens remain in your account until you use them.',
    icon: ClockIcon,
  },
  {
    name: 'Secure payments',
    description: 'All transactions are encrypted and processed securely.',
    icon: ShieldCheckIcon,
  },
  {
    name: '30-day guarantee',
    description: 'Not satisfied? Get a full refund within 30 days.',
    icon: CheckIcon,
  },
];

export default function PricingPage() {
  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Simple, Transparent Pricing
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Choose the perfect token package for your AI conversation needs. 
                All packages include bonus tokens and flexible usage with no expiration dates.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Token Packages */}
      <TokenPackages />

      {/* Features Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for meaningful AI conversations
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our pricing model is designed to be fair, transparent, and flexible. 
              You only pay for what you use, with no hidden costs or surprises.
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

      {/* FAQ Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 mb-16 text-center">
              Pricing FAQ
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              <div className="pt-6">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  How do tokens work?
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Tokens are consumed based on conversation duration. Each agent has a different price per minute, 
                  and tokens are deducted in real-time as you speak with the AI agents.
                </dd>
              </div>
              <div className="pt-6">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  What happens if I run out of tokens mid-conversation?
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  If you run out of tokens during a conversation, you'll be prompted to purchase more tokens to continue. 
                  Your conversation will be paused until you add more tokens to your account.
                </dd>
              </div>
              <div className="pt-6">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  Can I get a refund?
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Yes, we offer a 30-day money-back guarantee. If you're not satisfied with your experience, 
                  contact our support team for a full refund of unused tokens.
                </dd>
              </div>
              <div className="pt-6">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  Do you offer enterprise pricing?
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Yes, we offer custom enterprise packages for teams and organizations. 
                  Contact our sales team for bulk pricing and dedicated support options.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to start your AI journey?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Get started with 500 free tokens and experience the power of AI companionship. 
              No credit card required for your first conversation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Get Started Free
              </button>
              <button className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 