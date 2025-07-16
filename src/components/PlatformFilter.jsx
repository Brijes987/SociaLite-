import React from 'react'
import { motion } from 'framer-motion'

const PlatformFilter = ({ platforms, selectedPlatforms, setSelectedPlatforms }) => {
  const togglePlatform = (platformKey) => {
    if (selectedPlatforms.includes(platformKey)) {
      setSelectedPlatforms(selectedPlatforms.filter(p => p !== platformKey))
    } else {
      setSelectedPlatforms([...selectedPlatforms, platformKey])
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2 self-center">
        Platforms:
      </span>
      {Object.entries(platforms).map(([key, platform]) => (
        <motion.button
          key={key}
          onClick={() => togglePlatform(key)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedPlatforms.includes(key)
              ? 'text-white shadow-md'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
          style={{
            backgroundColor: selectedPlatforms.includes(key) ? platform.color : undefined
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {platform.name}
        </motion.button>
      ))}
    </div>
  )
}

export default PlatformFilter