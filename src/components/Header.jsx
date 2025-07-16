import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon, BarChart3 } from 'lucide-react'

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <motion.header 
      className="mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary-500 rounded-lg">
            <BarChart3 className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Social Media Analytics
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Track your social media performance across platforms
            </p>
          </div>
        </div>
        
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {darkMode ? (
            <Sun className="h-5 w-5 text-yellow-500" />
          ) : (
            <Moon className="h-5 w-5 text-gray-600" />
          )}
        </motion.button>
      </div>
    </motion.header>
  )
}

export default Header