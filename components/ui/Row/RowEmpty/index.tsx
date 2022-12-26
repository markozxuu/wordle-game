// Components
import Box from '@components/ui/Box'
// Styles
import s from '../row.module.scss'

const RowEmpty = () => {
  return (
    <div className={s.row}>
      {Array.from(Array(5)).map((_, _index) => (
        <Box key={_index} status="empty" value="" />
      ))}
    </div>
  )
}

export default RowEmpty
