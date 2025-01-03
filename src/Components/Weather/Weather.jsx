import React, {useEffect} from 'react'

function Weather() {
const apiKey = process.env.REACT_APP_API_KEY;
let location = 'New York';
useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
         .then((response) => {response.json()
         console.log(response); 
         })
         .then(data => {
            console.log('Parsed Data: ', data);
         })
})
  

  return (
    <div>
      <p>this is weather component</p>
    </div>
  )
}

export default Weather
