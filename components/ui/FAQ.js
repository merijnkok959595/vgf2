import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "How do AI voice conversations work?",
    answer: "Our AI agents use advanced natural language processing and voice synthesis technology to engage in real-time conversations. You can speak naturally with them, and they'll respond with human-like voices and intelligent, contextual responses."
  },
  {
    question: "How much do conversations cost?",
    answer: "Pricing varies by agent, ranging from €1.40 to €2.00 per minute. You purchase tokens in packages, and tokens are consumed based on conversation duration. New users get 500 free tokens to start."
  },
  {
    question: "What makes your AI agents different?",
    answer: "Our agents are specialized in specific domains (wellness, business, creativity, education, fitness) and have distinct personalities and expertise. They're designed to provide meaningful, helpful conversations rather than generic responses."
  },
  {
    question: "Are my conversations private and secure?",
    answer: "Yes, absolutely. All conversations are encrypted and stored securely. We never share your conversations with third parties, and you can request deletion of your data at any time."
  },
  {
    question: "Can I use the same agent multiple times?",
    answer: "Yes! You can have multiple conversations with the same agent. They'll remember your previous interactions and build on your relationship over time."
  },
  {
    question: "What if I run out of tokens during a conversation?",
    answer: "If you run out of tokens mid-conversation, you'll be prompted to purchase more tokens to continue. Your conversation will be paused until you add more tokens to your account."
  },
  {
    question: "Do tokens expire?",
    answer: "No, tokens never expire. You can use them whenever you want, and they'll remain in your account until you use them for conversations."
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "We offer a 30-day money-back guarantee. If you're not satisfied with your experience, contact our support team for a full refund of unused tokens."
  },
  {
    question: "What devices can I use?",
    answer: "Our platform works on any device with a web browser and microphone. This includes desktop computers, laptops, tablets, and smartphones."
  },
  {
    question: "How do I get started?",
    answer: "Simply create an account to receive your 500 free tokens, then browse our agents and start your first conversation. No credit card required for the free trial."
  },
  {
    question: "Can I schedule conversations in advance?",
    answer: "Currently, conversations are on-demand, but we're working on scheduling features. You can start a conversation with any available agent whenever you want."
  },
  {
    question: "What if I have technical issues?",
    answer: "Our support team is available 24/7 to help with any technical issues. You can contact us through the support page or email us directly."
  },
  {
    question: "Are there any age restrictions?",
    answer: "You must be 18 or older to use our service. For users under 18, parental consent is required."
  },
  {
    question: "Can I use the service for business purposes?",
    answer: "Yes! Many professionals use our agents for business coaching, career advice, and creative brainstorming. We also offer enterprise packages for teams."
  },
  {
    question: "How do I know which agent is right for me?",
    answer: "Each agent has a detailed profile explaining their expertise and personality. You can read their descriptions and specializations to find the best match for your needs."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 mb-16 text-center">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="pt-6"
              >
                <dt>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-start justify-between text-left text-gray-900"
                  >
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <ChevronDownIcon
                        className={`h-6 w-6 transition-transform duration-200 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </dt>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.dd
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 pr-12"
                    >
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </dl>
        </div>
        
        {/* Contact Support */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you get the most out of your AI conversations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors">
                Contact Support
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 