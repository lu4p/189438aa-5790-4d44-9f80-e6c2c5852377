'use client';

import { Dispatch, SetStateAction } from "react";
import { Event } from "./event";

import Panel from "./panel";
import EventInfo from "./event-info";

export default function Cart(
  cart: Event[],
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
) {
  return (
    <Panel title={"Cart"} open={open} setOpen={setOpen}>
      <ul role="list" className="divide-y divide-gray-100">
        {cart.length != 0 ? cart.map((event) => (
          <li key={event._id} className="py-5 text-sm">
            <p className="font-semibold leading-6 text-gray-900">{event.title}</p>
            {EventInfo(event)}
          </li>
        )) : (
          <li className="flex gap-x-4 py-5">
            <p className="text-sm leading-6 text-gray-900">Your cart is empty</p>
          </li>
        )}
      </ul>
    </Panel>
  )
}