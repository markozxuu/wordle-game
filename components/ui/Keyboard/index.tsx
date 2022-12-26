// Styles
import DeleteKeyIcon from '@components/icons/DeleteKey'
import s from './keyboard.module.scss'

interface KeyboardProps {
  keys: string[]
  onKeyPressed: (key: string) => void
}

const Keyboard = ({ keys, onKeyPressed }: KeyboardProps) => {
  const handleInput = (e: any) => {
    onKeyPressed(e.target.textContent)
  }
  const handleEnter = (e: any) => {
    onKeyPressed('ENTER')
  }
  const handleDelete = (e: any) => {
    onKeyPressed('BACKSPACE')
  }
  return (
    <div className={s.keyboardContainer}>
      {Array.from(Array(10)).map((_, _index) => (
        <button key={_index} className={s.key} onClick={handleInput}>
          {keys[_index]}
        </button>
      ))}
      <div className="flex ml-3 space-x-3">
        {Array.from(Array(10)).map((_, _index) => (
          <button key={_index + 10} className={s.key} onClick={handleInput}>
            {keys[_index + 10]}
          </button>
        ))}
      </div>
      <button className={s.enterKey} onClick={handleEnter}>
        ENTER
      </button>
      <div className="flex space-x-3">
        {Array.from(Array(7)).map((_, _index) => (
          <button key={_index + 20} className={s.key} onClick={handleInput}>
            {keys[_index + 20]}
          </button>
        ))}
      </div>
      <button className={s.deleteKey} onClick={handleDelete}>
        <DeleteKeyIcon />
      </button>
    </div>
  )
}

export default Keyboard
