import { MapPinIcon } from "@heroicons/react/20/solid";
import { Event } from "./event";
import { formatDateTime } from "./util";

export default function EventInfo({ event }: { event: Event }) {
  return (
    <>
      <a href={event.venue.direction} className='flex font-semibold' >
        <MapPinIcon className='h-5 w-5 text-indigo-600 mr-1' />
        {event.venue.name}
      </a>
      <p>Starts: {formatDateTime(event.startTime, event.date)}</p>
      <p>Ends: {formatDateTime(event.endTime, event.date)}</p>
    </>
  )
}