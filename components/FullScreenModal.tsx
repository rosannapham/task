import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode } from 'react';

interface FullScreenModalProps {
onClose: () => void
title: string,
children: ReactNode,
actions?: ReactNode,
}
export function FullScreenModal ({
  onClose,
  title,
  children,
  actions,
}: FullScreenModalProps ) {

  return (
<Dialog.Root open={true} >
  <Dialog.Portal>
    <Dialog.Overlay/>

    <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-5">
      
      <div className="w-full h-full rounded-xl border border-gray-300  flex flex-col overflow-hidden bg-gray-100">
     
        <header className="flex-shrink-0 border-b border-gray-200 min-h-[64px] bg-white ">
        <div className='h-full flex flex-row items-center gap-4'>
        <button
                title="close"
                onClick={onClose}
                className="bg-transparent border-none cursor-pointer p-2 rounded-md flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                close
              </button>

            <Dialog.Title
              className="text-xl font-semibold m-0 text-gray-900"
            >
              {title}
            </Dialog.Title>
            </div>
        </header>

        <main
          data-testid="modal-content"
          className="flex-1 overflow-y-auto overflow-x-hidden p-6"
        >
          {children}
        </main>

        <footer className="flex-shrink-0 border-t border-gray-200 min-h-[72px] p-6 bg-white">
          <div
            className="flex justify-end items-center gap-3"
            data-testid="modal-actions"
          >
            {actions}
          </div>
        </footer>

      </div>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
  );
};

