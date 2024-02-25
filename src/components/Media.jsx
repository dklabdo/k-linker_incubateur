import React from 'react'
import icon1 from '../assets/facebook.svg'
import icon2 from '../assets/insta.svg'
import icon3 from '../assets/linkedin.svg'
import { useNavigate } from 'react-router-dom'
import Aos from 'aos'
import { useEffect } from 'react'
function Media() {
    useEffect(()=>{Aos.init()},[])
  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className='my-24'>
        <h2>@media</h2>
        <p className='text-white  text-center text-base md:text-lg mx-2' >follow us on our social media account to khnow about our latest event</p>
        <div className='flex flex-col items-center md:flex-row md:flex-grow gap-8 justify-center my-8 '>
            <MediaCard link={1} img={icon1} content="k-linker sc" />
            <MediaCard link={2} img={icon2} content="k-linker sc" />
            <MediaCard link={3} img={icon3} content="k-linker sc" />
            
        </div>
    </div>
  )
}
function MediaCard({img,content,link}){
    const navigate = useNavigate()
    function handleClick(){
        if(link == 1){
            navigate('')
        }
        else if(link == 2){
            navigate('')
        }
        else{
            navigate('')
        }
    }
    return(
        <div data-aos="zoom-in" data-aos-duration="1000" className='bg-white px-8 w-fit flex items-center gap-4 md:px-4 py-2 rounded-2xl justify-center' >
            <img className='w-10' src={img} />
            <p className=' w-32 md:w-fit ' >{content} </p>
        </div>
    )
}
export default Media