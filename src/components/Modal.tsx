import {Fragment} from 'react'
import {Dialog,Transition} from '@headlessui/react'
import NewMovieForm from './NewMovieForm'

type ModalProps = {
    open: boolean;
    onClose: () => void;
};

const Modal = ({open, onClose}:ModalProps) => {
    return (
        <div >
        <Transition appear show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10 " onClose={onClose}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            
            

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="transform transition duration-[400ms]"
                enterFrom="opacity-0 rotate-[-120deg] scale-50"
                enterTo="opacity-100 rotate-0 scale-100"
                leave="transform duration-200 transition ease-in-out"
                leaveFrom="opacity-100 rotate-0 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-primary p-6 text-left align-middle shadow-xl transition-all">
                    <NewMovieForm/>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
            
            </Dialog>
        </Transition>
        </div>
    );
    };
    
    export default Modal;