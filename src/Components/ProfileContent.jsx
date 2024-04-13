import React from 'react'
import proPic from "../profile.png"

const ProfileContent = () => {
  return (
    <>
    <div className='up-pic'>
      <img src={proPic} alt='profile pic' />
    </div>
    <div className="up-info">
        <H4 className="up-name">Jordan Walke</H4>
        <h5 className='up-job'>react creator</h5>
        <p className='up-misc'>lorem picsum</p>
    </div>
    </>
  )
}

export default ProfileContent
