import Layout from '../components/layout/Layout';
import FAQ from '../components/ui/FAQ';
import { motion } from 'framer-motion';
import { 
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const categories = [
  {
    name: 'Getting Started',
    description: 'Learn how to begin your AI conversation journey',
    icon: QuestionMarkCircleIcon,
    color: 'bg-blue-500',
  },
  {
    name: 'Conversations',
    description: 'Understanding how AI conversations work',
    icon: ChatBubbleLeftRightIcon,
    color: 'bg-green-500',
  },
  {
    name: 'Pricing & Tokens',
    description: 'Everything about our pricing model and token system',
    icon: ClockIcon,
    color: 'bg-purple-500',
  },
  {
    name: 'Privacy & Security',
    description: 'How we protect your data and conversations',
    icon: ShieldCheckIcon,
    color: 'bg-orange-500',
  },
];

export default function FAQPage() {
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
                Frequently Asked Questions
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Find answers to common questions about our AI agents, pricing, and how to get started. 
                Can't find what you're looking for? Contact our support team.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">FAQ Categories</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Find answers by category
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Browse our frequently asked questions organized by topic to quickly find the information you need.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${category.color} mb-6`}>
                  <category.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main FAQ Section */}
      <FAQ />

      {/* Contact Support */}
      <div className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Still need help?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Our support team is here to help you get the most out of your AI conversations. 
              We're available 24/7 to answer your questions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Contact Support
              </button>
              <button className="text-sm font-semibold leading-6 text-white">
                View Documentation <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 