import Layout from '../components/layout/Layout';
import Hero from '../components/ui/Hero';
import AgentGrid from '../components/agents/AgentGrid';
import FAQ from '../components/ui/FAQ';
import { motion } from 'framer-motion';
import { 
  UsersIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const stats = [
  { id: 1, name: 'Active Users', value: '10,000+' },
  { id: 2, name: 'Conversations', value: '50,000+' },
  { id: 3, name: 'AI Agents', value: '5' },
  { id: 4, name: 'Satisfaction Rate', value: '98%' },
];

const testimonials = [
  {
    body: "Dr. Sarah Chen helped me through a really difficult time. Her calming presence and therapeutic approach made me feel truly understood.",
    author: {
      name: 'Sarah Johnson',
      handle: 'Wellness Seeker',
      imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: "Marcus Thompson's business advice was spot-on. He helped me restructure my company strategy and we've seen 40% growth since.",
    author: {
      name: 'Michael Chen',
      handle: 'Entrepreneur',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: "Luna Rodriguez is my creative muse! She helped me break through writer's block and finish my novel. Her enthusiasm is infectious.",
    author: {
      name: 'Emma Davis',
      handle: 'Author',
      imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero />
      
      {/* Stats Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Loved by users worldwide
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200"
                >
                  <div className="flex items-center gap-x-4 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-gray-900 mb-4">
                    <p className="text-sm leading-6">"{testimonial.body}"</p>
                  </blockquote>
                  <figcaption className="flex items-center gap-x-4">
                    <img
                      className="h-10 w-10 rounded-full bg-gray-50"
                      src={testimonial.author.imageUrl}
                      alt=""
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{testimonial.author.handle}</div>
                    </div>
                  </figcaption>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Agent Preview Section */}
      <AgentGrid />
      
      {/* FAQ Section */}
      <FAQ />
    </Layout>
  );
}
