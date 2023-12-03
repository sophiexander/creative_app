import { useState } from "react"
import sunset from "../pilates/assets/sunset.jpg"

export function Home() {
  return (
    <div>
      <div>
        <h2>Welcome!</h2>
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
            <img src={sunset} alt="logo" width={400} />
          </div>
          <div className="uk-card-body">
            <h3 className="uk-card-title">Leggy Frog</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
