import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import StatsCards from './components/StatsCards'
import Charts from './components/Charts'
import PlatformFilter from './components/PlatformFilter'
import ExportButton from './components/ExportButton'
import data from './data.json'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [selectedPlatforms, setSelectedPlatforms] = useState(['instagram', 'twitter', 'linkedin', 'facebook'])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const filteredData = {
    ...data,
    platforms: Object.fromEntries(
      Object.entries(data.platforms).filter(([key]) => selectedPlatforms.includes(key))
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          
          <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <PlatformFilter 
              platforms={data.platforms}
              selectedPlatforms={selectedPlatforms}
              setSelectedPlatforms={setSelectedPlatforms}
            />
            <ExportButton />
          </div>

          <StatsCards data={filteredData} />
          <Charts data={filteredData} />
        </motion.div>
      </div>
    </div>
  )
}

export default App