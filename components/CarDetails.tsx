'use client'
import { CarProps } from '@/types';
import React from 'react'
import Image from 'next/image';
import { Fragment } from 'react';
import {Dialog, Transition}  from '@headlessui/react'

interface CarDetailsProps{
     isOpen:boolean;
     closeModal: () => void;
      car:CarProps;
}

const CarDetails = ({isOpen,closeModal,car}:CarDetailsProps) => {
                         
  return (
    <>
        <Transition appear show={isOpen} as={Fragment}>
             <Dialog as={"div"} className={"relative z-10"} onClose={closeModal}>
                <Transition.Child as={Fragment}
                enter="ease-out duration-300 "
                enterFrom='opacity-0 '
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                >

                    <div className='fixed inset-0 bg-black bg-opacity-25'/>

                </Transition.Child>
                   <div className='fixed inset-0 overflow-auto '>
                     <div className='flex min-h-full items-center justify-center p-4 text-center' >
                     <Transition.Child as={Fragment}
                enter="ease-out duration-300 "
                enterFrom='opacity-0 scale-95 '                   
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95 '
                >
                <Dialog.Panel className="max-h-[90vh] overflow-y-auto relative w-full max-w-lg transform p-6 rounded-2xl bg-white shadow-xl transition-all flex flex-col">
                      <button type='button' onClick={closeModal} className='absolute top-2 z-10 bg-white right-2 w-fit p-2 rounded-full'>
                            <Image src="/close.svg" alt='close' width={20} height={20} className='object-contain'/>
                      </button>
                      <div className='flex-1 flex flex-col gap-3 '>
                        <div className="relative bg-cover bg-center bg-pattern w-full h-40 rounded-lg">
                        <Image src="/hero.png"  alt='car model' fill priority className='object-contain'/>

                        </div>
                        <div className='flex gap-3 '>
                              <div className="flex-1 relative w-full bg-primary-blue-100 h-24 rounded-lg">
                        <Image src="/hero.png"  alt='car model' fill priority className='object-contain'/>

                              </div>
                              <div className="flex-1 relative w-full bg-primary-blue-100 h-24 rounded-lg">
                        <Image src="/hero.png"  alt='car model' fill priority className='object-contain'/>

                              </div>
                              <div className="flex-1 relative w-full bg-primary-blue-100 h-24 rounded-lg">
                        <Image src="/hero.png"  alt='car model' fill priority className='object-contain'/>

                              </div>
                        </div>
                      </div>
                      <div className='flex flex-col flex-1 gap-2'>
                        <h2 className='font-bold text-lg capitalize'>{car.make} {car.model}</h2>
                        <div className="mt-3 flex flex-wrap gap-4">
                              {Object.entries(car).map(([key,value]) => (
                              <div className='flex justify-between gap-5 text-right w-full ' key={key}>
                                      <h4 className='text-gray capitalize '>{key.split("_").join(" ")}</h4>
                                      <p className='text-black-100 font-semibold capitalize'>{value}</p>
                              </div>
                              ))}
                        </div>

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

export default CarDetails