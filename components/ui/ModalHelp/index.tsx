import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

interface ModalHelpProps {
  isOpen: boolean
  closeModal: () => void
}

const ModalHelp = ({ isOpen, closeModal }: ModalHelpProps) => {
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
                    id="localSEO"
                    as="h3"
                    style={{ fontWeight: 900 }}
                    className="text-[35px] leading-6 text-black dark:text-white text-center"
                  >
                    Cómo jugar
                  </Dialog.Title>
                  <div className="mt-9">
                    <p className=" text-lg text-black dark:text-white font-normal">
                      Adivina la palabra oculta en cinco intentos.
                    </p>
                  </div>

                  <div className="mt-2">
                    <p className=" text-lg text-black dark:text-white font-normal">
                      Cada intento debe ser una palabra válida de 5 letras.
                    </p>
                  </div>

                  <div className="mt-2">
                    <p className=" text-lg text-black dark:text-white font-normal">
                      Después de cada intento el color de las letras cambia para
                      mostrar qué tan cerca estás de acertar la palabra.
                    </p>
                  </div>

                  <div className="mt-2">
                    <p className="text-lg text-black dark:text-white font-bold">
                      Ejemplos
                    </p>
                  </div>

                  <div className="flex space-x-3 mt-5">
                    <div className="grid grid-cols-5 gap-3 ml-3">
                      <div className="md:h-[76px] md:w-[76px] w-[48px] h-[48px] rounded-[5px] flex justify-center items-center bg-accents-1">
                        <p className="text-[35px] font-black text-black dark:text-white">
                          G
                        </p>
                      </div>
                      <div className="md:h-[76px] md:w-[76px] w-[48px] h-[48px] rounded-[5px] flex justify-center items-center border border-black dark:border-accents-3 bg-white dark:bg-accents-4">
                        <p className="text-[35px] font-black text-black dark:text-white">
                          A
                        </p>
                      </div>
                      <div className="md:h-[76px] md:w-[76px] w-[48px] h-[48px] rounded-[5px] flex justify-center items-center border border-black dark:border-accents-3  bg-white dark:bg-accents-4">
                        <p className="text-[35px] font-black text-black dark:text-white">
                          T
                        </p>
                      </div>
                      <div className="md:h-[76px] md:w-[76px] w-[48px] h-[48px] rounded-[5px] flex justify-center items-center border border-black dark:border-accents-3 bg-white dark:bg-accents-4">
                        <p className="text-[35px] font-black text-black dark:text-white">
                          O
                        </p>
                      </div>
                      <div className="md:h-[76px] md:w-[76px] w-[48px] h-[48px] rounded-[5px] flex justify-center items-center border border-black dark:border-accents-3 bg-white dark:bg-accents-4">
                        <p className="text-[35px] font-black text-black dark:text-white">
                          S
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-3">
                    La letra <b>G</b> está en la palabra y en la posición
                    correcta.
                  </p>

                  <div className="flex space-x-3 mt-5">
                    <div className="grid grid-cols-5 gap-3 ml-3">
                      <div className="md:h-[76px] md:w-[76px] w-[48px] h-[48px] rounded-[5px] flex justify-center items-center border border-black dark:border-accents-3 bg-white dark:bg-accents-4">
                        <p className="text-[35px] font-black text-black dark:text-white">
                          V
                        </p>
                      </div>
                      <div className="md:h-[76px] md:w-[76px] w-[48px] h-[48px] rounded-[5px] flex justify-center items-center border border-black dark:border-accents-3 bg-white dark:bg-accents-4">
                        <p className="text-[35px] font-black text-black dark:text-white">
                          O
                        </p>
                      </div>
                      <div className="md:h-[76px] md:w-[76px] w-[48px] h-[48px] rounded-[5px] flex justify-center items-center bg-accents-2">
                        <p className="text-[35px] font-black text-black dark:text-white">
                          C
                        </p>
                      </div>
                      <div className="md:h-[76px] md:w-[76px] w-[48px] h-[48px] rounded-[5px] flex justify-center items-center border border-black dark:border-accents-3 bg-white dark:bg-accents-4">
                        <p className="text-[35px] font-black text-black dark:text-white">
                          A
                        </p>
                      </div>
                      <div className="md:h-[76px] md:w-[76px] w-[48px] h-[48px] rounded-[5px] flex justify-center items-center border border-black dark:border-accents-3 bg-white dark:bg-accents-4">
                        <p className="text-[35px] font-black text-black dark:text-white">
                          L
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-3">
                    La letra <b>C</b> está en la palabra pero en la posición
                    incorrecta.
                  </p>

                  <div className="flex space-x-3 mt-5">
                    <div className="grid grid-cols-5 gap-3 ml-3">
                      <div className="md:h-[76px] md:w-[76px] w-[48px] h-[48px] rounded-[5px] flex justify-center items-center border border-black dark:border-accents-3 bg-white dark:bg-accents-4">
                        <p className="text-[35px] font-black text-black dark:text-white">
                          C
                        </p>
                      </div>
                      <div className="md:h-[76px] md:w-[76px] w-[48px] h-[48px] rounded-[5px] flex justify-center items-center border border-black dark:border-accents-3 bg-white dark:bg-accents-4">
                        <p className="text-[35px] font-black text-black dark:text-white">
                          A
                        </p>
                      </div>
                      <div className="md:h-[76px] md:w-[76px] w-[48px] h-[48px] rounded-[5px] flex justify-center items-center border border-black dark:border-accents-3 bg-white dark:bg-accents-4">
                        <p className="text-[35px] font-black text-black dark:text-white">
                          N
                        </p>
                      </div>
                      <div className="md:h-[76px] md:w-[76px] w-[48px] h-[48px] rounded-[5px] flex justify-center items-center border border-black dark:border-accents-3 bg-white dark:bg-accents-4">
                        <p className="text-[35px] font-black text-black dark:text-white">
                          T
                        </p>
                      </div>
                      <div className="md:h-[76px] md:w-[76px] w-[48px] h-[48px] rounded-[5px] flex justify-center items-center bg-accents-3">
                        <p className="text-[35px] font-black text-black dark:text-white">
                          O
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-3">
                    La letra <b>O</b> no esta en la palabra
                  </p>

                  <p className="mt-3">
                    Puede haber letras repetidas. Las pistas son independientes
                    para cada letra.
                  </p>

                  <p className="mt-3 text-center">
                    ¡Una palabra nueva cada 5 minutos!
                  </p>

                  <div className="mt-4 flex justify-center">
                    <p
                      className=" uppercase cursor-pointer flex items-center justify-center rounded-[5px] border border-transparent bg-accents-1 text-white px-[54px]  text-[28px] font-extrabold"
                      onClick={closeModal}
                    >
                      ¡Jugar!
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

export default ModalHelp
