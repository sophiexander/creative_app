import { useEffect, useState } from "react"

export function Move() {
  const [date, setDate] = useState(new Date())
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  var now = new Date()

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)

    return function cleanup() {
      clearInterval(timer)
    }
  })

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
        <p>{date.toUTCString()}</p>
        <div className="uk-flex uk-flex-center uk-margin-large uk-text-large">
          00:00:{date.getSeconds()}
        </div>
        <button>Start timer</button>
      </div>
    </div>
  )
}
