import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export const BuyModal = ({ open, onClose, data }) => {
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 flex items-center gap-4"
                  >
                    <img
                      src={data.image}
                      alt={`${data.id} coin logo`}
                      width="28"
                    ></img>
                    {data.name}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-base font-medium leading-6 text-gray-700">
                      Price {data.price} USD
                    </p>
                    <p className="text-base font-medium leading-6 text-gray-700">
                      Change (last 24h){" "}
                      {data.priceChange > 0 ? (
                        <span className="text-green-600">
                          {data.priceChange} %
                        </span>
                      ) : (
                        <span className="text-red-600">
                          {data.priceChange} %
                        </span>
                      )}
                    </p>
                    <p className="text-base font-medium leading-6 text-gray-700">
                      Low (last 24h) {data.low} USD
                    </p>
                    <p className="text-base font-medium leading-6 text-gray-700">
                      High (last 24h) {data.high} USD
                    </p>
                    <p className="text-base font-medium leading-6 text-gray-700">
                      All Time High {data.athDate?.slice(0, 10)}
                    </p>
                    <p className="text-base font-medium leading-6 text-gray-700">
                      ATH Price {data.ath} USD
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={onClose}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
