/* eslint-disable @next/next/no-img-element */
import { PlusIcon } from '@heroicons/react/20/solid'
import { Event, EventDispatcher } from './event'
import EventInfo from './event-info'

export default function EventCard({
  event, events, filteredEvents, cart,
  setEvents, setFilteredEvents, setCart,
}: {
  event: Event,
  events: Event[],
  setEvents: EventDispatcher,

  filteredEvents: Event[],
  setFilteredEvents: EventDispatcher,

  cart: Event[],
  setCart: EventDispatcher,
}) {

  const addToCart = () => {
    setCart(cart.concat(event))

    const filterEvents = (events: Event[]) => {
      return events.filter((e: Event) => e._id != event._id)
    }

    setEvents(filterEvents(events))
    setFilteredEvents(filterEvents(filteredEvents))
  }

  return (
    <div className="relative col-span-1 flex flex-col rounded-lg bg-white shadow">
      <div className="px-2 py-2 text-sm flex items-center h-24">
        <img className="rounded-full h-10 w-10" src="/profile.jpg" alt='' />
        <div className="font-semibold mb-2 px-2">{event.title}</div>
      </div>


      <div className="aspect-w-1 aspect-h-1">
        <img className="w-full h-full object-cover" src={event.flyerFront} alt='' />
      </div>

      <div className="px-4 pt-4 pb-10 text-sm">
        <EventInfo event={event} />
      </div>

      <div className='absolute bottom-0 right-0 mr-2 mb-2'>
        <button onClick={addToCart}
          type="button"
          className="rounded-full bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <PlusIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
