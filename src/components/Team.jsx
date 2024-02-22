import React from 'react'
import img from '../assets/profile1.jpg'
function Team() {
  return (
    <div className=''>
        <h2 className=''>Our team</h2>
        <div className='relative grid mx-auto md:grid-cols-2 lg:grid-cols-3   grid-cols-1   overflow-y-hidden h-fit '>
        <ProfileCard img={img} name="Sayah Abdel-ilah" post="Club president" job="front-end web developer" />
        <ProfileCard img={img} name="Moumine Rayane" post="Dev team leader" job="Mobile developer" />
        <ProfileCard img={img} name="Chiali mouad" post="Mobile Developer" />
        <ProfileCard img={img} name="Benmansnour imad" post="Back-and developer" />
        <ProfileCard img={img} name="Amrani heithem" post="Back-end developer" />
        <ProfileCard img={img} name="Bouanani rania" post="vice-president" job="ui/ux designer" />
        <ProfileCard img={img} name="Benharrat walid" post="HR leader" job="3d artist" />
        <ProfileCard img={img} name="Sebti yamena" post="Production leader" job="ui/ux designer" />
        <ProfileCard img={img} name="Mehamdi soufiane" post="Production" job="Photographe" />
        <ProfileCard img={img} name="Diab mohamed" post="Event animator & HR" />
    </div>

    </div>
    
  )
}

function ProfileCard({img,name,job,post}){
    return(
        
            <div className='h-fit mx-auto w-full px-2 flex-col md:flex-row  gap-6 group transition md:hover:bg-white rounded-xl flex items-center  py-6 my-4 '>
            <img className='w-16 h-16 md:w-20 md:h-20 rounded-full' src={img} alt='...' />
            <div className=''>
                <h3 className='text-center md:text-start text-lg text-main' >{name} </h3>
                <p className='text-white md:text-start text-center text-sm md:text-base md:group-hover:text-black'>{post} <br/>{job} </p>
            </div>
        </div>

        
    )

}

export default Team