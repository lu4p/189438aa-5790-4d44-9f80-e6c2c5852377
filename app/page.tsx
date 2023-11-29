import { Event } from './event'
import EventPage from './event-page';
import { compareByField } from './util';

async function getEvents(): Promise<Event[]> {
  const res = await fetch('https://teclead-ventures.github.io/data/london-events.json')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  let events: Event[] = await res.json()

  return events.sort(compareByField('startTime'))
}

export default async function Home() {
  const events = await getEvents()

  return <EventPage events={events} />
}
