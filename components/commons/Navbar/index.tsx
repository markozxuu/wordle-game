import { useEffect, useState } from 'react'

// Icons
import ChartIcon from '@components/icons/Chart'
import HelpIcon from '@components/icons/Help'
// Components
import ToggleTheme from '@components/ui/ToggleTheme'
import ModalHelp from '@components/ui/ModalHelp'
import ModalChart from '@components/ui/ModalChart'

const Navbar = () => {
  const [modalHelp, setModalHelp] = useState<boolean>(false)
  const [modalChart, setModalChart] = useState<boolean>(false)

  const showHelpModal = () => {
    localStorage.setItem(KEY_STORAGE, 'true')
    setModalHelp(!modalHelp)
  }

  const showChartModal = () => {
    setModalChart(!modalChart)
  }

  const KEY_STORAGE = 'firstTime'

  useEffect(() => {
    if (!localStorage.getItem(KEY_STORAGE)) {
      setModalHelp(true)
    }
  }, [])

  return (
    <>
      <div className="mx-auto max-w-[638px] px-2  bg-navbar dark:bg-navbar-dark mt-12 rounded-[15px]">
        <nav className="flex items-center justify-between flex-wrap p-3">
          <button onClick={showHelpModal}>
            <HelpIcon />
          </button>
          <div className={`flex-grow flex lg:items-center w-auto text-center`}>
            <div className="flex-grow ml-5">
              <span className="font-semibold text-[40px] text-[#202537] dark:text-[#DADCE0] tracking-[0.075em]">
                WORDLE
              </span>
            </div>
            <div className="flex justify-center items-center space-x-3">
              <div className="relative">
                <button onClick={showChartModal}>
                  <ChartIcon />
                </button>
              </div>
              <div>
                <ToggleTheme />
              </div>
            </div>
          </div>
        </nav>
      </div>
      <ModalHelp closeModal={showHelpModal} isOpen={modalHelp} />
      <ModalChart closeModal={showChartModal} isOpen={modalChart} />
    </>
  )
}

export default Navbar
