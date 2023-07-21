import React, { useEffect, useState } from 'react'



function App() {

  const[city,setCity] = useState("")

  const[temp,setTemp]=useState("")
  const[humidity,setHumidity]=useState("")
  const[feels,setFeels]=useState("")
  const[wind,setWind]=useState("")

  const[loaded,setLoaded] = useState(false)

  function getData(){
    fetch(`http://api.weatherapi.com/v1/current.json?key=6546665ee178403d92c191429232007&q=${city}&aqi=no`)
    .then(res=>res.json())
    .then(data=>{
      setTemp(data.current.temp_c)
      setHumidity(data.current.humidity)
      setFeels(data.current.feelslike_c)
      setWind(data.current.wind_kph)
      setLoaded(true)
      setCity("")
    })
  }

  return (
    <>

    {
    loaded?
    <div className="container">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <div className="shadow rounded mt-5 px-3 py-3">
            <div className="h3">{temp} °C</div>
            <div>Humidity : {humidity} </div>
            <div>Feels like : {feels}</div>
            <div>Wind speed : {wind}</div>
            <button className='btn btn-dark mt-2' onClick={()=>setLoaded(false)}>Go back</button>
          </div>
          
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
    :
    <div className="container">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <div className="shadow rounded mt-5 px-3 py-3">
            <div className="h4">Enter your city name</div>
            <input type="text" className="form-control py-2 mt-2" value={city} onChange={e=>setCity(e.target.value)} placeholder="City name here"/>
            <button className='btn btn-dark mt-3' onClick={()=>getData()}>Get data</button>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>


    }
    

   
    </>
  );
}

export default App;
