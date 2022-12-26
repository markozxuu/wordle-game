import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Confetti from 'react-confetti'
import useMeasure from 'react-use-measure'

// Hooks
import { useWindow } from '@hooks/useWindow'
import { useCounter } from '@hooks/useCountdown'
// Serivces
import { isValidWord } from 'services/request'
// Utils
import { KEYBOARD_KEYS } from '@utils/const'
// Types
import { GameStatus } from '@typings/game'
// Components
import RowCompleted from '../Row/RowCompleted'
import RowCurrent from '../Row/RowCurrent'
import RowEmpty from '../Row/RowEmpty'
import Keyboard from '../Keyboard'

const Wordle = () => {
  const [_, wordOfTheDay] = useCounter(300000)

  const [wordOfDay, setWordOfDay] = useState<string>('')
  const [currentWord, setCurrentWord] = useState<string>('')
  const [completedWords, setCompletedWords] = useState<string[]>([])
  const [turn, setTurn] = useState<number>(1)
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Playing)

  useEffect(() => {
    setWordOfDay(wordOfTheDay)
  }, [])

  const onKeyPressed = (key: string) => {
    if (gameStatus !== GameStatus.Playing) {
      return
    }

    if (key === 'BACKSPACE' && currentWord.length > 0) {
      onDelete()
      return
    }

    if (key === 'ENTER' && currentWord.length === 5 && turn <= 5) {
      onEnter()
      return
    }

    if (currentWord.length >= 5) return

    if (KEYBOARD_KEYS.includes(key)) {
      onInput(key)
      return
    }
  }

  const onInput = (letter: string) => {
    const newWord = currentWord + letter
    setCurrentWord(newWord)
  }

  const onDelete = () => {
    const newWord = currentWord.slice(0, -1)
    setCurrentWord(newWord)
  }

  const onEnter = async () => {
    if (currentWord === wordOfDay) {
      setCompletedWords([...completedWords, currentWord])
      setGameStatus(GameStatus.Won)
      return
    }

    if (turn === 5) {
      setCompletedWords([...completedWords, currentWord])
      setGameStatus(GameStatus.Lost)
      toast('break')
      return
    }

    // validar si existe la palabra
    const validWord = await isValidWord(currentWord)

    if (currentWord.length === 5 && !validWord) {
      toast('Palabra no encontrada 🥶', { id: 'clipboard' })
      console.log('validWord')
      console.log(validWord)
      return
    }

    setCompletedWords([...completedWords, currentWord])
    setTurn(turn + 1)
    setCurrentWord('')
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    const { key } = event
    const letter = key.toUpperCase()

    onKeyPressed(letter)
  }

  useWindow('keydown', handleKeyDown)
  const [ref, bounds] = useMeasure()

  return (
    <div ref={ref}>
      <div className="flex flex-col items-center justify-center mt-[87px]">
        palabra del dia: {wordOfDay}
        {completedWords.map((word, _index) => (
          <RowCompleted key={_index} word={word} solution={wordOfDay} />
        ))}
        {gameStatus === GameStatus.Playing ? (
          <RowCurrent word={currentWord} />
        ) : null}
        {Array.from(Array(5 - turn)).map((_, _index) => (
          <RowEmpty key={_index} />
        ))}
      </div>
      <div className="my-10">
        <Keyboard keys={KEYBOARD_KEYS} onKeyPressed={onKeyPressed} />
      </div>
      <Toaster />
      {gameStatus === GameStatus.Won && (
        <Confetti width={bounds.width} height={bounds.height} />
      )}
    </div>
  )
}

export default Wordle
