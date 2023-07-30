import { useState } from "react"

export function Move() {
  const [time, setTime] = useState("")
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  var now = new Date()

  //   setTime(now.toUTCString())

  const gettimeNow = () => {
    var date = new Date()

    return date
    date.setMinutes(30)

    // const time = 1

    // setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
    // setMinutes(Math.floor((time / 1000 / 60) % 60))
    // setSeconds(Math.floor((time / 1000) % 60))
  }
  return (
    <div>
      <div>
        <h2>Movement Timer</h2>
        <p>{now.toUTCString()}</p>
        <button>Start timer</button>
      </div>
    </div>
  )
}
