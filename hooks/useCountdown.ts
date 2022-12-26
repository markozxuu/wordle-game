import { useState, useEffect, useRef } from 'react'
import { WORDS } from 'services/words'

function useInterval(callback, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export function useCounter(initialTime) {
  const [counter, setCounter] = useState(initialTime)
  const counterRef = useRef(counter)
  const [wordOfTheDay, setWordOfTheDay] = useState(WORDS[2])

  useInterval(() => {
    if (counterRef.current <= 0) {
      setCounter(initialTime)
      counterRef.current = initialTime
      setWordOfTheDay(getRandomWord())
    } else {
      setCounter(counterRef.current - 1000)
      counterRef.current -= 1000
    }
  }, 1000)

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000)
    const seconds = Math.floor((time % 60000) / 1000)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  useEffect(() => {
    const storedCounter = localStorage.getItem('counter')
    if (
      storedCounter &&
      Number.isInteger(+storedCounter) &&
      +storedCounter > 0
    ) {
      setCounter(+storedCounter)
      counterRef.current = +storedCounter
    }
  }, [])

  useEffect(() => {
    setWordOfTheDay(getRandomWord())
  }, [])

  return [formatTime(counter), wordOfTheDay]
}

function getRandomWord() {
  const words = WORDS

  return words[Math.floor(Math.random() * words.length)]
}
