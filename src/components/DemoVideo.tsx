'use client'

import { motion } from 'framer-motion'
import { Play, Download } from 'lucide-react'

export default function DemoVideo() {
  return (
    <section id="demo" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            See <span className="gradient-text">Memorae AI</span> in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how our AI transforms memory management in just 2 minutes
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden">
              {/* Video thumbnail/placeholder */}
              <div className="text-white text-center p-8">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <Play className="h-8 w-8 ml-1" />
                </div>
                <div className="text-2xl font-bold mb-2">Watch Demo Video</div>
                <div className="text-blue-100">See how Memorae AI works</div>
              </div>
              
              {/* Play button overlay */}
              <button className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <Play className="h-12 w-12 text-white ml-1" />
                </div>
              </button>
            </div>
          </motion.div>

          {/* Video Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll See</h3>
            
            {[
              {
                title: "Smart Memory Capture",
                description: "See how AI automatically organizes your photos and videos"
              },
              {
                title: "Intelligent Search",
                description: "Watch natural language search in action"
              },
              {
                title: "Memory Sharing",
                description: "Learn how to create and share memory collections"
              },
              {
                title: "AI Insights",
                description: "Discover patterns and connections in your memories"
              }
            ].map((feature, index) => (
              <div key={feature.title} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.button
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </motion.button>
              
              <motion.button
                className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="h-5 w-5 mr-2" />
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}