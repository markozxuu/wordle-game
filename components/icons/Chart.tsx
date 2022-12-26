import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ChartIcon = () => {
  const [isMounted, setMounted] = useState<boolean>(false)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => setMounted(true), [])

  if (!isMounted) return null

  return (
    <span className="text-[#000] dark:text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="36"
        fill="none"
      >
        <rect
          width="29.613"
          height="24"
          x="4.935"
          y="6"
          fill="currentColor"
          fill-opacity={isDark ? '1' : '0.49'}
          rx="2"
        />
        <path
          stroke={isDark ? '#000' : '#fff'}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.2"
          d="M13.161 15v9M19.742 18v6M26.323 12v12"
        />
      </svg>
    </span>
  )
}

export default ChartIcon
