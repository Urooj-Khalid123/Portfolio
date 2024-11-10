import React from 'react'
import Image from 'next/image';


interface propsType {
    companyName: string;
    desc: string;
    img: string;
    name: string;
    designation: string;
  }

const TestimonialCard: React.FC<propsType> = ({companyName, desc, img, name,  designation}) => {
  return (
    <div  data-aos="zoom-in-up">
      <div className="border border-accents p-8 h-[450px] flex flex-col justify-between">
        <h2 className='text-3xl text-accents'>{companyName}</h2>
        <p>{desc}</p>

      <div className='flex gap-4'>
        <Image  className="gray-scale rounded-full" src={img} height={50} width={50} alt="user"/>
      </div>
         <h2>{name}</h2>
         <p className='text-gray-500'>{designation}</p>
      </div>


    </div>
  )
}

export default TestimonialCard
