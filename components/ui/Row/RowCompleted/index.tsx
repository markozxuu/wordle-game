// Components
import Box from '@components/ui/Box'
// Styles
import s from '../row.module.scss'
// Types
import { BoxStatus } from '@typings/game'

interface RowCompletedProps {
  word: string
  solution: string
}

const RowCompleted = ({ word, solution }: RowCompletedProps) => {
  function checkLetter(letter: string, pos: number): BoxStatus {
    if (solution.includes(letter)) {
      if (solution[pos] === letter) {
        return 'correct'
      } else {
        return 'present'
      }
    } else {
      return 'absent'
    }
  }
  return (
    <div className={s.row}>
      {Array.from(Array(5)).map((_, _index) => (
        <Box
          key={_index}
          value={word[_index]}
          status={checkLetter(word[_index], _index)}
        />
      ))}
    </div>
  )
}

export default RowCompleted
