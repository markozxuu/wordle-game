import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useCounter } from '@hooks/useCountdown'

interface ModalChartProps {
  isOpen: boolean
  closeModal: () => void
}

const ModalChart = ({ isOpen, closeModal }: ModalChartProps) => {
  const [time] = useCounter(300000)

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[546px] transform overflow-hidden rounded-[15px] bg-navbar dark:bg-accents-4 p-6 text-left align-middle border border-black dark:border-accents-3 transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-[35px] leading-6 text-black dark:text-white font-extrabold text-center mt-7 mb-9"
                  >
                    Estadísticas
                  </Dialog.Title>
                  <div className="flex justify-between px-10">
                    <div className="flex flex-col items-center my-5">
                      <span className="text-[35px] font-extrabold">8</span>
                      <p className="text-[21px] capitalize">jugadas</p>
                    </div>
                    <div className="flex flex-col items-center my-5">
                      <span className="text-[35px] font-extrabold">2</span>
                      <p className="text-[21px] capitalize">victorias</p>
                    </div>
                  </div>
                  <div className="flex justify-center flex-col items-center mt-10">
                    <p className=" text-[19px] uppercase">
                      siguiente
                      <span className="ml-2">palabra</span>
                    </p>
                    <p className="text-2xl font-bold mt-3">0{time}</p>
                  </div>
                  <div className="flex justify-center mt-10">
                    <p
                      className="capitalize cursor-pointer flex items-center justify-center rounded-[5px] border border-transparent bg-accents-1 text-white px-20 text-[28px] font-extrabold"
                      onClick={closeModal}
                    >
                      Aceptar
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ModalChart
