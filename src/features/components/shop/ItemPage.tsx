import { useState } from "react"
import sunset from "../pilates/assets/sunset.jpg"
import ItemCatalogue from "./ItemCatalogue"

export function ItemPage() {
  // A hook could be good here or selector to get the current item based on url?
  return (
    <div className="uk-flex-center">
      <h2 className="uk-padding-large">Catalogue</h2>
      <div className="uk-margin-small" uk-grid></div>
    </div>
  )
}
