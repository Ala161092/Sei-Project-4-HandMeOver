import React from 'react'
import axios from 'axios'

const uploadUrl = 'https://api.cloudinary.com/v1_1/dmbnpx1fy/image/upload'
const uploadPreset = 'y0ih0wpf'
console.log('preset---->', uploadPreset)
console.log('uploadUrl---->', uploadUrl)

export const ImageUploadFile = ({ handleImageUrl, value }) => {
  const handleUpload = async (event) => {
    const data = new FormData()
    data.append('file', event.target.files[0])
    data.append('upload_preset', uploadPreset)
    const res = await axios.post(uploadUrl, data)
    handleImageUrl(res.data.url)
  }

  return (
    <>
      {value ? (
        <div className='image-field'>
          <img src={value} alt='Profile Image' />
        </div>
      ) : (
        <div className='image-field'>
          <label>Image</label>
          <input className='input' type='file' onChange={handleUpload} />
        </div>
      )}
    </>
  )
}
