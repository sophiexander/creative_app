import { useState } from "react"
import sunset from "../pilates/assets/sunset.jpg"
import ItemCatalogue from "./ItemCatalogue"

export function ItemPage() {
  return (
    <div className="uk-flex-center">
      <h2 className="uk-padding-large">Catalogue</h2>
      <div className="uk-margin-small" uk-grid>
        <ItemCatalogue image={sunset} title="Leggy Frog" link={"leggy-frog"} />
        <ItemCatalogue
          image={sunset}
          title="Pudding cat"
          link={"pudding-cat"}
        />
      </div>
    </div>
  )
}
