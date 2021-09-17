import React from 'react'

function Pizza({ details }) {
  if (!details) {
    return <h3>Working fetching your pizza&apos;s details...</h3>
  }

  return (
    <div className='pizza container'>
        <h2>Active Orders</h2>
      <h3>{details.name}</h3>
      <p>Email: {details.email}</p>
      <p>Address: {details.address}</p>
      

      {/* {
        !!details.hobbies && !!details.hobbies.length &&
        <div>
          Hobbies:
          <ul>
            {details.hobbies.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      } */}
    </div>
  )
}

export default Pizza
