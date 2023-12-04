import { Event, EventDispatcher } from './event'

import { Dispatch, SetStateAction, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

export default function Navbar({ events, setFilteredEvents, cart, setCartOpen }: {
  events: Event[],
  setFilteredEvents: EventDispatcher,
  cart: Event[],
  setCartOpen: Dispatch<SetStateAction<boolean>>
}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: any) => {
    const searchTerm = e.target.value
    setSearchTerm(searchTerm)

    // Filter the data based on the search term
    const filtered = events.filter((event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setFilteredEvents(filtered)
  }

  return (
    <div className="w-full px-4 sticky top-0 py-4 bg-indigo-600 z-20">
      <div className="relative flex">
        <div className="flex items-center grow">
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              value={searchTerm}
              onChange={handleSearch}
              id="search"
              name="search"
              className="w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Search"
              type="search"
            />
          </div>
        </div>

        <div className="flex justify-end w-min">
          <button
            onClick={() => setCartOpen(true)}
            type="button"
            className="relative ml-5 flex-shrink-0 rounded-full p-1 text-white focus:outline-none"
          >
            <ShoppingCartIcon className="h-6 w-6" />

            {cart.length > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 bg-red-500 text-white text-xs rounded-full">
                {cart.length}
              </span>

            )}
          </button>
        </div>
      </div>
    </div >
  )
}
