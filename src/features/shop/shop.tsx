import { useState } from "react"
import sunset from "../pilates/assets/sunset.jpg"
import Item from "./item"

export function Shop() {
  return (
    <div className="uk-flex-center">
      <h2 className="uk-padding-large">Catalogue</h2>
      <div className="uk-margin-small" uk-grid>
        <Item image={sunset} />
        <Item image={sunset} />
      </div>
    </div>
  )
}
