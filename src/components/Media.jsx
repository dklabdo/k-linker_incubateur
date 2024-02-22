import React from 'react'
import icon1 from '../assets/facebook.svg'
import icon2 from '../assets/insta.svg'
import icon3 from '../assets/linkedin.svg'
function Media() {
  return (
    <div className=''>
        <h2>@media</h2>
        <p className='text-white  text-center text-base md:text-lg mx-2' >follow us on our social media account to khnow about our latest event</p>
        <div className='flex flex-col items-center md:flex-row md:flex-grow gap-8 justify-center my-8 '>
            <MediaCard img={icon1} content="k-linker sc" />
            <MediaCard img={icon2} content="k-linker sc" />
            <MediaCard img={icon3} content="k-linker sc" />
            
        </div>
    </div>
  )
}
function MediaCard({img,content}){
    return(
        <div className='bg-white w-fit flex items-center gap-4 px-4 py-2 rounded-2xl justify-center' >
            <img className='w-10' src={img} />
            <p className=' w-32 md:w-fit ' >{content} </p>
        </div>
    )
}
export default Media