import React from 'react'

const Locate = ({ panTo }) => {
    
  return (
      <div>
        <button onClick={() => {
          navigator.geolocation.getCurrentPosition((position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            })
          }, () => null)
        }}>Locate Me!</button>
      </div>
    )
  }

  export default Locate