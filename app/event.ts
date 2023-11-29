import { Dispatch, SetStateAction } from "react"

export interface Event {
    _id: string
    title: string
    flyerFront: string
    attending: number
    date: string
    startTime: string
    endTime: string
    contentUrl: string
    venue: Venue
    pick: Pick
    artists: Artist[]
    city: string
    country: string
    private: boolean
    __v: number
}

export interface Venue {
    id: string
    name: string
    contentUrl: string
    live: boolean
    direction: string
}

export interface Pick {
    id: string
    blurb: string
}

export interface Artist {
    id: string
    name: string
    _id: Id
}

export interface Id {
    $oid: string
}

export type EventDispatcher = Dispatch<SetStateAction<Event[]>>
