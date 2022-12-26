// Components
import Box from '@components/ui/Box'
// Styles
import s from '../row.module.scss'

interface RowCurrentProps {
  word: string
}

const RowCurrent = ({ word }: RowCurrentProps) => {
  const wordArray = word.split('')
  return (
    <div className={s.row}>
      {wordArray.map((letter, _index) => (
        <Box key={_index} value={letter} status="edit" />
      ))}
      {Array.from(Array(5 - wordArray.length)).map((_, _index) => (
        <Box key={_index} value={''} status="edit" />
      ))}
    </div>
  )
}

export default RowCurrent
