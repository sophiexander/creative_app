import React from "react"
import pilates_logo from "./assets/pilates.png"
import pilates2_logo from "./assets/pilates_2.png"
import pilates3_logo from "./assets/pilates_3.png"
import pilates4_logo from "./assets/pilates_4.png"
import sunset from "./assets/sunset.jpg"
import Icon from "./Icon"
// import "./App.css";

export default function PilatesHome() {
  return (
    <div className="App">
      <div className="uk-child-width-1@s uk-light" uk-grid>
        <div
          className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center@m uk-flex-right@l"
          style={{
            backgroundImage: `url(${sunset})`,
          }}
        >
          <Icon image={pilates2_logo} />
          <Icon image={pilates_logo} />
          <Icon image={pilates4_logo} />
          <Icon image={pilates3_logo} />
        </div>
      </div>
    </div>
  )
}
