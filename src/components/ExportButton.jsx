import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, FileImage, FileText } from 'lucide-react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const ExportButton = () => {
  const [isExporting, setIsExporting] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  const exportToPNG = async () => {
    setIsExporting(true)
    try {
      const element = document.getElementById('root')
      const canvas = await html2canvas(element, {
        backgroundColor: null,
        scale: 2,
        useCORS: true
      })
      
      const link = document.createElement('a')
      link.download = `social-media-dashboard-${new Date().toISOString().split('T')[0]}.png`
      link.href = canvas.toDataURL()
      link.click()
    } catch (error) {
      console.error('Error exporting PNG:', error)
    } finally {
      setIsExporting(false)
      setShowDropdown(false)
    }
  }

  const exportToPDF = async () => {
    setIsExporting(true)
    try {
      const element = document.getElementById('root')
      const canvas = await html2canvas(element, {
        backgroundColor: '#ffffff',
        scale: 1,
        useCORS: true
      })
      
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('l', 'mm', 'a4')
      const imgWidth = 297
      const pageHeight = 210
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let heightLeft = imgHeight
      
      let position = 0
      
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }
      
      pdf.save(`social-media-dashboard-${new Date().toISOString().split('T')[0]}.pdf`)
    } catch (error) {
      console.error('Error exporting PDF:', error)
    } finally {
      setIsExporting(false)
      setShowDropdown(false)
    }
  }

  return (
    <div className="relative">
      <motion.button
        onClick={() => setShowDropdown(!showDropdown)}
        className="btn-primary flex items-center space-x-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={isExporting}
      >
        <Download className="h-4 w-4" />
        <span>{isExporting ? 'Exporting...' : 'Export'}</span>
      </motion.button>

      {showDropdown && (
        <motion.div
          className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            onClick={exportToPNG}
            className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center space-x-2 rounded-t-lg"
            disabled={isExporting}
          >
            <FileImage className="h-4 w-4" />
            <span>Export as PNG</span>
          </button>
          <button
            onClick={exportToPDF}
            className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center space-x-2 rounded-b-lg"
            disabled={isExporting}
          >
            <FileText className="h-4 w-4" />
            <span>Export as PDF</span>
          </button>
        </motion.div>
      )}
    </div>
  )
}

export default ExportButton