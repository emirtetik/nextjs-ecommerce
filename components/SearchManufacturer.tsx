'use client'
import React,{useState,Fragment} from 'react' 
import { SearchManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { manufacturers } from '@/constans'



const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufacturerProps ) => {
      const [query, setquery] = useState('')

      
     const filteredManufacturers =
       query === "" 
       ? manufacturers 
       : manufacturers.filter((item) => (
                item.toLowerCase()
                .replace(/\s+/g, "")
                .includes(query.toLowerCase().replace(/\s+/g, ""))
     ))

  return (
    <div className='search-manufacturer'>
        <Combobox value={manufacturer} onChange={setManufacturer}>
            <div className='relative w-full'>
             <Combobox.Button className="absolute top-[14px]">
                <Image src="/car-logo.svg"
                     width={20} height={20}
                     className='ml-4'
                     alt='car logo'
                />

             </Combobox.Button>
             <Combobox.Input className={"search-manufacturer__input"} 
              placeholder='volkswogen'
              displayValue={(manufacturer:string) => manufacturer}
              onChange={(e) => setquery(e.target.value)}
             />
            <Transition as={Fragment} leave='transtion ease-in duration-100' 
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setquery('')}
                >
                    <Combobox.Options>
            {filteredManufacturers.map((item) => (
        <Combobox.Option
            key={item}
            value={item}
            className={({ active }) => `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
        >
            {({ selected, active }) => (
                <div className="flex items-center">
                    <span
                        className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                        }`}
                    >
                        {item}
                    </span>
                    {selected && (
                        <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? 'text-white' : 'text-teal-600'
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </span>
                    )}
                </div>
            )}
        </Combobox.Option>
    ))}
</Combobox.Options>
            </Transition>
            </div>
        </Combobox>
    </div>

  )
}

export default SearchManufacturer