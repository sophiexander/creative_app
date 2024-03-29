import { useState } from "react"
import sunset from "../../pilates/assets/sunset.jpg"
import ItemCatalogue from "./ItemCatalogue"

export function Index() {
  return (
    <div className="uk-flex-center">
      <h2 className="uk-padding-large text-red-300">Catalogue</h2>
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
