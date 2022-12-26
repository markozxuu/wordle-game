import { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'
import { useTheme } from 'next-themes'

const ToggleTheme = () => {
  const [isMounted, setMounted] = useState<boolean>(false)
  const [enabled, setEnabled] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (theme === 'light') {
      setEnabled(true)
    }
  }, [])

  const toggle = () => {
    if (enabled) {
      setEnabled(false)
      return setTheme('dark')
    }
    setEnabled(true)
    return setTheme('light')
  }

  if (!isMounted) return null

  return (
    <div className="inline-flex items-center">
      <Switch
        checked={enabled}
        onChange={toggle}
        className={`${
          enabled
            ? 'bg-[url(/static/theme-light.svg)] bg-fill bg-center'
            : 'bg-[url(/static/theme-dark.svg)]  bg-fill bg-center'
        }
          relative inline-flex h-[30px] w-[60px] bg-no-repeat shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${
            enabled
              ? 'translate-x-[2.1rem] translate-y-[0.22rem] bg-[url(/static/sun.svg)]'
              : 'translate-x-[0.10rem] translate-y-[0.22rem] bg-[url(/static/mon.svg)]'
          }
            pointer-events-none inline-block h-[20px] w-[21px] bg-center transform bg-transparent bg-no-repeat rounded-full ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}
export default ToggleTheme
