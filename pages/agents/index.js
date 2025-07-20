import Layout from '../../components/layout/Layout';
import AgentGrid from '../../components/agents/AgentGrid';
import { motion } from 'framer-motion';
import { 
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function AgentsPage() {
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
                Meet Our AI Agents
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Each agent is specially designed with unique personalities and expertise to help you in different areas of your life. 
                Find your perfect AI companion and start meaningful conversations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Agent Grid */}
      <AgentGrid />

      {/* How It Works Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">How It Works</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Start your AI conversation in 3 simple steps
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Getting started with our AI agents is quick and easy. Here's how to begin your journey.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  Choose Your Agent
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Browse our collection of specialized AI agents. Each one has unique expertise and personality 
                    designed for specific needs and interests.
                  </p>
                </dd>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  Start Your Conversation
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Click "Start Conversation" and begin talking naturally with your chosen AI agent. 
                    They'll respond with human-like voices and intelligent, contextual responses.
                  </p>
                </dd>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  Build Your Relationship
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Continue conversations over time to build a meaningful relationship with your AI companion. 
                    They'll remember your interactions and adapt to your preferences.
                  </p>
                </dd>
              </motion.div>
            </dl>
          </div>
        </div>
      </div>

      {/* Pricing Info */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Pay only for the time you spend in conversation. No hidden fees, no subscriptions.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-2 mb-4">
                <ClockIcon className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Pay Per Minute</h3>
              </div>
              <p className="text-gray-600">
                Only pay for the time you actually spend talking. No wasted money on unused minutes.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-2 mb-4">
                <StarIcon className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Free Trial</h3>
              </div>
              <p className="text-gray-600">
                Get 500 free tokens to experience our AI agents before making any purchase.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-2 mb-4">
                <SparklesIcon className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">No Expiration</h3>
              </div>
              <p className="text-gray-600">
                Your tokens never expire. Use them whenever you want to chat with our AI agents.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 