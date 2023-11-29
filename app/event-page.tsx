'use client';

import { Fragment, useState } from "react";
import { Event } from "./event";
import Navbar from "./navbar";
import EventCard from "./event-card";
import Cart from "./cart";
import { formatDate, formatDateLocal } from "./util";


export default function EventPage({ events: initEvents }: { events: Event[] }) {
  const [events, setEvents] = useState(initEvents);
  const [filteredEvents, setFilteredEvents] = useState(initEvents);
  const [cart, setCart] = useState(new Array<Event>);
  const [cartOpen, setCartOpen] = useState(false)


  let lastdate: String;
  const dateSection = (event: Event) => {
    if (lastdate == event.date) {
      return
    }

    lastdate = event.date

    return (
      <div className="col-span-full sticky z-10 top-16 p-2 bg-slate-50">
        <h2 className="font-bold text-indigo-600">{formatDate(event.date)}</h2>
      </div>
    )
  }

  return (
    <>
      <Navbar events={events} setFilteredEvents={setFilteredEvents} cart={cart} setCartOpen={setCartOpen} />

      {Cart(cart, cartOpen, setCartOpen)}

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex gap-x-1.5">
          <span className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
            <div className="w-4 h-4">
              <img className="w-full h-full object-cover rounded-full" src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" alt="" />
            </div>

            London
          </span>
          <span className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
            {formatDateLocal(events[0].date)} - {formatDateLocal(events[events.length - 1].date)}
          </span>
        </div>

        <h1 className="font-bold mt-6">Public Events</h1>

        <div role="list" className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 pt-4">
          {filteredEvents.map((event) => (
            <Fragment key={event._id}>
              {dateSection(event)}

              <EventCard event={event}
                cart={cart} setCart={setCart}
                events={events} setEvents={setEvents} filteredEvents={filteredEvents} setFilteredEvents={setFilteredEvents} />
            </Fragment>
          ))}
        </div>
      </main>
    </>
  )
}