import cx from 'clsx'

// Types
import { BoxStatus } from '@typings/game'
// Styles
import s from './box.module.scss'

interface BoxProps {
  value: string
  status: BoxStatus
}

const Box = ({ value, status }: BoxProps) => {
  const boxStatus = cx({
    [s.correct]: status === 'correct',
    [s.present]: status === 'present',
    [s.absent]: status === 'absent',
    [s.empty]: status === 'empty',
    [s.edit]: status === 'edit',
  })

  return (
    <div className={boxStatus}>
      <p>{value}</p>
    </div>
  )
}

export default Box
