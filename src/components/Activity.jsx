import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
function Activity() {
  return (
    <div className='w-full flex flex-col p-4'>
        
        <Sectioon title='Dev Team' img={img1} text="Lorem Ipsum is simply dummy text ustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem"/>
        <Sectioon title='Game Dev' img={img2} text="Lorem Ipsof the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem"/>
        <Sectioon title='Explore AI' img={img3} text="Lummy text of the prindard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem"/>
       
    </div>
  )
}

function Sectioon({title,text,img}){
    return(
        <div className='flex flex-col md:flex-row-reverse my-8 justify-between md:odd:flex-row items-center gap-16'>
            <div className='flex flex-col gap-4'>
                <h3 className='text-main text-4xl ' >{title} </h3>
                <p className='text-justify text-white' >{text} </p>
            </div>
            <img className='size-96 w-full md:w-[40%] rounded-3xl object-cover' src={img} />
        </div>
    )
}

export default Activity