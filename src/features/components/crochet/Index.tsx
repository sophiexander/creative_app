import { useState } from "react"
import sunset from "../../pilates/assets/sunset.jpg"
import ItemCatalogue from "./ItemCatalogue"

export function Index() {
  return (
    <div className="place-items-center">
      <div className="m-4" uk-grid>
        <ItemCatalogue image={sunset} title="Leggy Frog" link={"leggy-frog"} />
      </div>
    </div>
  )
}
