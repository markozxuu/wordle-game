import { useEffect, useState } from 'react'

export function useWindow(eventName: keyof WindowEventMap, cb: any) {
  useEffect(() => {
    window.addEventListener(eventName, cb)

    return () => {
      window.removeEventListener(eventName, cb)
    }
  })
}
