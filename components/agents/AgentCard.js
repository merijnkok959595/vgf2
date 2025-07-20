import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon,
  StarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function AgentCard({ agent }) {
  const pricePerMinute = (agent.price / 60).toFixed(2);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-all duration-300"
    >
      <div className="p-6">
        {/* Agent Avatar */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            {agent.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{agent.name}</h3>
            <p className="text-sm text-gray-600">{agent.role}</p>
          </div>
        </div>
        
        {/* Agent Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {agent.description}
        </p>
        
        {/* Specializations */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Specializations
          </h4>
          <div className="flex flex-wrap gap-1">
            {agent.specialization.split(', ').map((spec, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
        
        {/* Voice Style */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
            Voice Style
          </h4>
          <p className="text-sm text-gray-600 italic">{agent.voiceStyle}</p>
        </div>
        
        {/* Pricing */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <ClockIcon className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">€{pricePerMinute}/min</span>
          </div>
          <div className="flex items-center space-x-1">
            <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">4.9</span>
          </div>
        </div>
        
        {/* Call Button */}
        <Link
          href={`/agents/${agent.id}`}
          className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors duration-200 group-hover:shadow-md"
        >
          <ChatBubbleLeftRightIcon className="h-5 w-5" />
          <span>Start Conversation</span>
        </Link>
      </div>
      
      {/* Popular Badge */}
      {agent.id === 'marcus-thompson' && (
        <div className="absolute -top-2 -right-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
            Most Popular
          </span>
        </div>
      )}
    </motion.div>
  );
} 