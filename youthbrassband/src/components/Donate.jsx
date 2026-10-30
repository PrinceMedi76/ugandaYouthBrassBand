import React from 'react'

const Donate = () => {
  return (
    <div class='donate'>
        <div class='donate-welcome'>
            <h1 className='text-black bg-white'>Welcome to </h1><br/>
            <h2 className='text-yellow-500'>Uganda Youth</h2>
            <h3 className='text-red-500'>Brass Band</h3>
        </div>
          <h class='center'>Community Based Organization - CBO - Wakiso District</h>
          <div class='vandm flex justify-between gap-20 m-20'>
            <div>
              <h class='fg-success fw-bold'>Our Vision : <span class='fg-white fw-lighter'>To be the leading youth brass band<br/>organization in Uganda nurturing talent<br/>for global stages.</span></h>
            </div>
            <div>
              <h class='fg-success fw-bold'>Our Mission : <span class='fg-white fw-lighter'>To empower youth through music education,<br/>life skills, and community <br/>services</span></h>
            </div>
          </div>
        <button type="button" class="donate-btn">Donate 🤍</button>
    </div>
  )
}

export default Donate
