import React, {useState} from 'react';
import './Timer.css';

function Timer() {

	let [time, setTime] = useState({seconds: 0, minutes: 0, hours: 0})

	let interval = setInterval(startTimer, 1000)

	function startTimer(){
		clearInterval(interval)
		setTime(() => {
			let copyTime = {...time}
			copyTime.seconds += 1
			return copyTime
		})
		if(time.seconds === 59){
			setTime(() => {
				let copyTime = {...time}
				copyTime.seconds = 0
				copyTime.minutes += 1
				return copyTime
		})
		}
		if(time.minutes === 59 && time.seconds === 59){
			setTime(() => {
				let copyTime = {...time}
				copyTime.seconds = 0
				copyTime.minutes = 0
				copyTime.hours += 1
				return copyTime
		})
		}
	}

  return (
    <div className='Timer'>
		{time.hours <= 9 
		?
		<div>0{time.hours}</div>
		:
		<div>{time.hours}</div>
		}
		:
		{time.minutes <= 9 
		?
		<div>0{time.minutes}</div>
		:
		<div>{time.minutes}</div>
		}
		:
		{time.seconds <= 9 
		?
		<div>0{time.seconds}</div>
		:
		<div>{time.seconds}</div>
		}
    </div>
  );
}

export default Timer;
